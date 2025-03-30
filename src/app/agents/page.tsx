"use client";

import { useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { topAgents } from "../../data/mockData";
import { CpuChipIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function AgentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredAgents = topAgents.filter((agent) => {
    const matchesSearch =
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || agent.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">AI Agents</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage and monitor your deployed AI agents
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Deploy Agent
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="w-full md:w-64">
              <label htmlFor="search" className="sr-only">
                Search agents
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Search agents"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="status" className="sr-only">
                Filter by status
              </label>
              <select
                id="status"
                name="status"
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
                <option value="error">Error</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {filteredAgents.length > 0 ? (
              filteredAgents.map((agent) => (
                <div
                  key={agent.id}
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-md flex items-center justify-center">
                          <CpuChipIcon
                            className="h-6 w-6 text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">
                            {agent.name}
                          </h3>
                          <p className="text-sm text-gray-500">{agent.type}</p>
                        </div>
                      </div>
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          agent.status === "online"
                            ? "bg-green-100 text-green-800"
                            : agent.status === "offline"
                            ? "bg-gray-100 text-gray-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {agent.status}
                      </span>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <dl className="grid grid-cols-2 gap-x-4 gap-y-3">
                      <div className="col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          ID
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {agent.id}
                        </dd>
                      </div>
                      <div className="col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Success Rate
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {agent.successRate}%
                        </dd>
                      </div>
                      <div className="col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Invocations
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {agent.invocations.toLocaleString()}
                        </dd>
                      </div>
                      <div className="col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Last Deployed
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {agent.lastDeployed}
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Manage
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100">
                  <CpuChipIcon
                    className="h-6 w-6 text-gray-600"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  No agents found
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Try adjusting your search or filter to find what you&apos;re
                  looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
