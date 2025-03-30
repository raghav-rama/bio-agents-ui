import { Fragment } from "react";
import { Popover, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const { data: session } = useSession();

  return (
    <div className="flex justify-between h-16 bg-white border-b border-gray-200 px-4">
      <div className="flex flex-1">
        <div className="flex w-full md:ml-0">
          <div className="relative w-full text-gray-400 focus-within:text-gray-600">
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="w-5 h-5" aria-hidden="true" />
            </div>
            <input
              type="text"
              className="block w-full h-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 border-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
      <div className="flex items-center ml-4 md:ml-6">
        {/* Notifications dropdown */}
        <Popover className="relative">
          <Popover.Button className="flex items-center justify-center p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none">
            <span className="sr-only">View notifications</span>
            <BellIcon className="w-6 h-6" aria-hidden="true" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 z-10 w-80 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-4 py-3">
                <h3 className="text-sm font-medium text-gray-900">
                  Notifications
                </h3>
              </div>
              <div className="py-1">
                <div className="px-4 py-2 text-sm text-gray-700">
                  <p>No new notifications</p>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        {/* Profile dropdown */}
        <Menu as="div" className="relative ml-3">
          <Menu.Button className="flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none">
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src={
                session?.user?.image ||
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              }
              alt={session?.user?.name || "User"}
            />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-4 py-3">
                <p className="text-sm">{session?.user?.name}</p>
                <p className="text-sm font-medium text-gray-900 truncate">
                  {session?.user?.email}
                </p>
              </div>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/profile"
                    className={`${
                      active ? "bg-gray-100" : ""
                    } block px-4 py-2 text-sm text-gray-700`}
                  >
                    Your Profile
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/settings"
                    className={`${
                      active ? "bg-gray-100" : ""
                    } block px-4 py-2 text-sm text-gray-700`}
                  >
                    Settings
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => signOut({ callbackUrl: "/auth/signin" })}
                    className={`${
                      active ? "bg-gray-100" : ""
                    } block w-full text-left px-4 py-2 text-sm text-gray-700`}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
