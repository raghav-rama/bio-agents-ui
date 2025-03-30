import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  ChartBarIcon,
  CpuChipIcon,
  CogIcon,
  UserGroupIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Agents", href: "/agents", icon: CpuChipIcon },
  { name: "Analytics", href: "/analytics", icon: ChartBarIcon },
  { name: "Deployments", href: "/deployments", icon: ServerIcon },
  { name: "Users", href: "/users", icon: UserGroupIcon },
  { name: "Settings", href: "/settings", icon: CogIcon },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200 w-64">
      <div className="flex items-center h-16 px-4 border-b border-gray-200">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-md">
            <CpuChipIcon className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold text-gray-900">BioAgents</span>
        </Link>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-2 py-2 text-sm font-medium rounded-md group ${
                isActive
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <item.icon
                className={`w-5 h-5 mr-3 ${
                  isActive
                    ? "text-indigo-600"
                    : "text-gray-400 group-hover:text-gray-500"
                }`}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
