'use client';

import { Search, Bell, User, ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-white px-6 shadow-sm">
      {/* Search Bar - Hidden on small screens, visible on md+ */}
      <div className="hidden items-center gap-2 rounded-lg border border-gray-200 bg-gray-100 px-3 py-2 transition-all focus-within:ring-2 focus-within:ring-blue-500 md:flex">
        <Search className="h-4 w-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search stats or users..."
          className="w-64 border-none bg-transparent text-sm text-gray-700 outline-none"
        />
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-red-500"></span>
        </button>

        <div className="mx-2 h-6 w-[1px] bg-gray-200"></div>
        <button className="group flex items-center gap-3 rounded-lg p-1 transition-colors hover:bg-gray-100">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-xs font-medium text-white">
            JD
          </div>
          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold leading-none text-gray-700">
              John Doe
            </p>
            <p className="mt-1 text-[11px] text-gray-500">Super Admin</p>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-400 transition-colors group-hover:text-gray-600" />
        </button>
      </div>
    </header>
  );
}
