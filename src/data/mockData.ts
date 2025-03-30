import React from "react";
import {
  CpuChipIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export const stats = [
  {
    id: 1,
    title: "Total Agents",
    value: "156",
    icon: React.createElement(CpuChipIcon, {
      className: "h-6 w-6",
      "aria-hidden": "true",
    }),
    trend: {
      value: 12,
      isPositive: true,
    },
  },
  {
    id: 2,
    title: "Active Deployments",
    value: "94",
    icon: React.createElement(DocumentTextIcon, {
      className: "h-6 w-6",
      "aria-hidden": "true",
    }),
    trend: {
      value: 8,
      isPositive: true,
    },
  },
  {
    id: 3,
    title: "Total Invocations",
    value: "3.2M",
    icon: React.createElement(ChatBubbleLeftRightIcon, {
      className: "h-6 w-6",
      "aria-hidden": "true",
    }),
    trend: {
      value: 24,
      isPositive: true,
    },
  },
  {
    id: 4,
    title: "Active Users",
    value: "2,543",
    icon: React.createElement(UserIcon, {
      className: "h-6 w-6",
      "aria-hidden": "true",
    }),
    trend: {
      value: 5,
      isPositive: true,
    },
  },
];

export const agentStatusData = [
  { name: "Online", value: 85, color: "#10B981" },
  { name: "Offline", value: 45, color: "#6B7280" },
  { name: "Error", value: 26, color: "#EF4444" },
];

export const deploymentActivityData = [
  {
    name: "Jan",
    deployments: 40,
    invocations: 240,
  },
  {
    name: "Feb",
    deployments: 30,
    invocations: 139,
  },
  {
    name: "Mar",
    deployments: 20,
    invocations: 980,
  },
  {
    name: "Apr",
    deployments: 27,
    invocations: 390,
  },
  {
    name: "May",
    deployments: 18,
    invocations: 480,
  },
  {
    name: "Jun",
    deployments: 23,
    invocations: 380,
  },
  {
    name: "Jul",
    deployments: 34,
    invocations: 430,
  },
];

export const topAgents = [
  {
    id: "agent-123",
    name: "ChatAssistant Pro",
    type: "Conversational",
    status: "online" as const,
    invocations: 325789,
    successRate: 98.4,
    lastDeployed: "2023-06-15",
  },
  {
    id: "agent-456",
    name: "DataAnalyzer",
    type: "Analysis",
    status: "online" as const,
    invocations: 184532,
    successRate: 95.7,
    lastDeployed: "2023-06-12",
  },
  {
    id: "agent-789",
    name: "ImageGenerator",
    type: "Generative",
    status: "offline" as const,
    invocations: 156302,
    successRate: 92.3,
    lastDeployed: "2023-06-10",
  },
  {
    id: "agent-101",
    name: "TextSummarizer",
    type: "Processing",
    status: "online" as const,
    invocations: 142658,
    successRate: 97.8,
    lastDeployed: "2023-06-14",
  },
  {
    id: "agent-202",
    name: "FinanceBot",
    type: "Domain-specific",
    status: "error" as const,
    invocations: 95462,
    successRate: 68.9,
    lastDeployed: "2023-06-08",
  },
];
