import { NonRetriableError } from "inngest";
import { inngest } from "./client";
import prisma from "@/lib/db";
import { topologicalSort } from "./utils";
import { NodeType } from "@/shared/node-types";
import { getExecutor } from "@/features/executions/lib/executor-registry";
import { httpRequestChannel } from "./channels/http-request";
import { manualTriggerChannel } from "./channels/manual-trigger";

export const executeWorkflow = inngest.createFunction(
  {
    id: "execute-workflow",
    retries: 0, // remove in prodcution
  },
  {
    event: "workflows/execute.workflow",
    channels: [httpRequestChannel(), manualTriggerChannel()],
  },
  async ({ event, step, publish }) => {
    const workflowId = event.data.workflowId;

    if (!workflowId) throw new NonRetriableError("Workflow ID is missing");

    const sortedNodes = await step.run("prepare-owrkflow", async () => {
      const workflow = await prisma.workflow.findUniqueOrThrow({
        where: { id: workflowId },
        include: {
          nodes: true,
          connections: true,
        },
      });
      return topologicalSort(workflow.nodes, workflow.connections);
    });

    // intitalize  the context with any initial data from the trigger
    let context = event.data.initialData || {};

    //execute each node
    for (const node of sortedNodes) {
      const executor = getExecutor(node.type as NodeType);
      context = await executor({
        data: node.data as Record<string, unknown>,
        nodeId: node.id,
        context,
        step,
        publish,
      });
    }
    return { workflowId, result: context };
  },
);
