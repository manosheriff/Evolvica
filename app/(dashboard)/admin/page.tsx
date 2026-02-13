// app/admin/page.tsx
import { Users, DollarSign, ShoppingBag, Activity } from 'lucide-react';
import { StatCard } from './components/stat-card';

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Evolvica Admin Dashboard</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Users" value="1,284" icon={Users} trend="+12%" />
        <StatCard
          title="Revenue"
          value="$45,231"
          icon={DollarSign}
          trend="+8%"
        />
        <StatCard title="Orders" value="432" icon={ShoppingBag} trend="+5%" />
        <StatCard title="Active Now" value="42" icon={Activity} trend="+2%" />
      </div>
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-100 p-6">
          <h2 className="font-semibold">Recent Transactions</h2>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50 text-sm text-gray-500">
              <th className="p-4 font-medium">Customer</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            <tr>
              <td className="p-4">John Doe</td>
              <td className="p-4">
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                  Completed
                </span>
              </td>
              <td className="p-4 font-medium">$250.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
