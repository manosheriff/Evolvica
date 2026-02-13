import { Mail, Phone, MoreVertical, UserPlus, Filter } from 'lucide-react';

const users = [
  {
    id: 1,
    name: 'Ahmed Hassan',
    email: 'ahmed@example.com',
    phone: '+20 101 234 5678',
    tier: 'Tier A',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Sara Mahmoud',
    email: 'sara@example.com',
    phone: '+20 112 987 6543',
    tier: 'Tier B',
    status: 'Inactive',
  },
  {
    id: 3,
    name: 'Omar Ali',
    email: 'omar@example.com',
    phone: '+20 155 432 1098',
    tier: 'Tier C',
    status: 'Active',
  },
  {
    id: 4,
    name: 'Layla Selim',
    email: 'layla@example.com',
    phone: '+20 122 555 0123',
    tier: 'Tier A',
    status: 'Pending',
  },
];

export default function UsersPage() {
  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
          <p className="text-sm text-gray-500">
            Manage, filter, and export your user database.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50">
            <Filter className="h-4 w-4" /> Filter
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700">
            <UserPlus className="h-4 w-4" /> Add User
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50 text-xs font-semibold uppercase text-gray-500">
                <th className="px-6 py-4">Name & Email</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">Tier / Ranking</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="transition-colors hover:bg-gray-50"
                >
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{user.name}</div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Mail className="h-3 w-3" /> {user.email}
                    </div>
                  </td>
                  <td className="font-mono px-6 py-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <Phone className="h-3 w-3" /> {user.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`rounded-md border px-2 py-1 text-xs font-medium ${
                        user.tier === 'Tier A'
                          ? 'border-purple-100 bg-purple-50 text-purple-700'
                          : user.tier === 'Tier B'
                            ? 'border-blue-100 bg-blue-50 text-blue-700'
                            : 'border-gray-200 bg-gray-50 text-gray-600'
                      }`}
                    >
                      {user.tier}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        user.status === 'Active'
                          ? 'bg-green-100 text-green-700'
                          : user.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-red-100 text-red-700'
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          user.status === 'Active'
                            ? 'bg-green-600'
                            : user.status === 'Pending'
                              ? 'bg-yellow-600'
                              : 'bg-red-600'
                        }`}
                      />
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="rounded-md p-1 transition-colors hover:bg-gray-200">
                      <MoreVertical className="h-4 w-4 text-gray-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="flex items-center justify-between border-t border-gray-100 px-6 py-4 text-xs text-gray-500">
          <span>Showing 1 to 4 of 1,284 users</span>
          <div className="flex gap-2">
            <button
              className="rounded border px-3 py-1 hover:bg-gray-50 disabled:opacity-50"
              disabled
            >
              Previous
            </button>
            <button className="rounded border px-3 py-1 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
