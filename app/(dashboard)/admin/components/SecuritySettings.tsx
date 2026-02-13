'use client';

import { ShieldCheck } from 'lucide-react';

export default function SecuritySettings() {
  return (
    <div className="max-w-2xl space-y-6">
      <div className="flex items-center justify-between rounded-lg border border-blue-100 bg-blue-50 p-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-blue-600" />
          <div>
            <p className="text-sm font-semibold text-blue-900">
              Two-factor authentication
            </p>
            <p className="text-xs text-blue-700">
              Add an extra layer of security to your account.
            </p>
          </div>
        </div>
        <button className="rounded-md bg-blue-600 px-3 py-1 text-xs text-white">
          Enable
        </button>
      </div>

      <div className="space-y-4">
        <button className="text-sm font-medium text-blue-600 hover:underline">
          Change Password
        </button>
        <p className="text-xs text-gray-500">
          Last changed 3 months ago. We recommend changing it every 6 months.
        </p>
      </div>
    </div>
  );
}
