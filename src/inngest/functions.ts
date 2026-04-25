import prisma from "@/lib/db";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    // fetching the video
    await step.sleep("fetching", "5s");

    // transcribing
    await step.sleep("transcribing", "5s");

    // send transcription to AI
    await step.sleep("sending-to-ai", "5s");

    await step.run("create-workflow", () => {
      return prisma.workflow.create({
        data: {
          name: "workflow-from-ingest",
        },
      });
    });
    return { message: `Hello ${event.data.email}!` };
  },
);
