"use client";

import DashboardLayout from "../components/layout/DashboardLayout";
import StatCard from "../components/dashboard/StatCard";
import AgentStatusChart from "../components/dashboard/AgentStatusChart";
import DeploymentActivityChart from "../components/dashboard/DeploymentActivityChart";
import TopAgentsTable from "../components/dashboard/TopAgentsTable";
import {
  stats,
  agentStatusData,
  deploymentActivityData,
  topAgents,
} from "../data/mockData";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Overview of your AI agents and deployments
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            trend={stat.trend}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
        <AgentStatusChart data={agentStatusData} />
        <DeploymentActivityChart data={deploymentActivityData} />
      </div>

      <div className="mb-6">
        <TopAgentsTable agents={topAgents} />
      </div>
    </DashboardLayout>
  );
}
