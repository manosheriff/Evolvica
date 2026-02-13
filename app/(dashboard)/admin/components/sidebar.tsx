'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Settings,
  Package,
  BarChart3,
  LogOut,
} from 'lucide-react';

const menuItems = [
  { name: 'Overview', href: '/admin', icon: LayoutDashboard },
  { name: 'Users', href: '/admin/users', icon: Users },
  { name: 'Products', href: '/admin/products', icon: Package },
  { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-gray-200 bg-white">
      {/* Logo Section */}
      <div className="p-6">
        <Link
          href="/admin"
          className="flex items-center gap-2 text-xl font-bold text-primary"
        >
          Evolvica
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-1 px-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center gap-3 rounded-lg px-3 py-2 transition-colors
                ${
                  isActive
                    ? 'bg-blue-50 font-medium text-primary'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }
              `}
            >
              <item.icon
                className={`h-5 w-5 ${isActive ? 'text-primary' : 'text-gray-400'}`}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Logout / User Profile Section */}
      <div className="border-t border-gray-200 p-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-colors hover:bg-red-50 hover:text-red-600">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
