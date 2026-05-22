import { InitialNode } from "@/components/intital-node";
import type { NodeTypes } from "@xyflow/react";
import { NodeType } from "@/shared/node-types";

export const nodeComponents = {
  [NodeType.INITIAL]: InitialNode,
} as const satisfies NodeTypes;

export type RegisteredNodeType = keyof typeof nodeComponents;
