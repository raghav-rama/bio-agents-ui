"use client";

import { useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import DeploymentActivityChart from "../../components/dashboard/DeploymentActivityChart";
import { deploymentActivityData } from "../../data/mockData";
import {
  ChartBarIcon,
  ArrowPathIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Mock performance data
const perfData = [
  { name: "GPT-4", latency: 125, accuracy: 97, cost: 0.05 },
  { name: "Llama 3", latency: 90, accuracy: 93, cost: 0.02 },
  { name: "Claude 3", latency: 110, accuracy: 95, cost: 0.04 },
  { name: "Mistral", latency: 85, accuracy: 91, cost: 0.01 },
  { name: "Gemini", latency: 115, accuracy: 94, cost: 0.03 },
];

const timeRanges = [
  { value: "7d", label: "Last 7 days" },
  { value: "30d", label: "Last 30 days" },
  { value: "90d", label: "Last 90 days" },
  { value: "ytd", label: "Year to date" },
  { value: "all", label: "All time" },
];

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30d");

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
          <p className="mt-1 text-sm text-gray-500">
            Insights and performance metrics for your AI agents
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <select
            id="timeRange"
            name="timeRange"
            className="block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            {timeRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <ArrowPathIcon
              className="-ml-1 mr-2 h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
            Refresh
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <ArrowDownTrayIcon
              className="-ml-1 mr-2 h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-6">
        <DeploymentActivityChart
          data={deploymentActivityData}
          title="Agent Deployments & Invocations"
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="flex items-center mb-4">
          <ChartBarIcon className="h-6 w-6 text-indigo-500 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Model Performance Comparison
          </h3>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={perfData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  padding: "8px",
                }}
              />
              <Legend />
              <Bar
                yAxisId="left"
                dataKey="latency"
                name="Latency (ms)"
                fill="#8884d8"
              />
              <Bar
                yAxisId="right"
                dataKey="accuracy"
                name="Accuracy (%)"
                fill="#82ca9d"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center mb-4">
          <CalendarIcon className="h-6 w-6 text-indigo-500 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">Cost Comparison</h3>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={perfData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                formatter={(value) => [`$${value} per 1K tokens`, "Cost"]}
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  padding: "8px",
                }}
              />
              <Legend />
              <Bar
                dataKey="cost"
                name="Cost per 1K tokens ($)"
                fill="#ff7c43"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardLayout>
  );
}
