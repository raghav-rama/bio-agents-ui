import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ActivityData {
  name: string;
  deployments: number;
  invocations: number;
}

interface DeploymentActivityChartProps {
  data: ActivityData[];
  title?: string;
}

export default function DeploymentActivityChart({
  data,
  title = "Deployment Activity",
}: DeploymentActivityChartProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #ccc",
                borderRadius: "6px",
                padding: "8px",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="deployments"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              name="Deployments"
            />
            <Line
              type="monotone"
              dataKey="invocations"
              stroke="#82ca9d"
              name="Invocations"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
