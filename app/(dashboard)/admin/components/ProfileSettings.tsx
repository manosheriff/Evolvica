'use client';

export default function ProfileSettings() {
  return (
    <form className="max-w-2xl space-y-6">
      <div className="mb-8 flex items-center gap-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-200 text-gray-400">
          <span className="text-2xl font-bold">JD</span>
        </div>
        <button
          type="button"
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
        >
          Change Avatar
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-sm font-medium">First Name</label>
          <input
            type="text"
            defaultValue="John"
            className="w-full rounded-lg border p-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium">Last Name</label>
          <input
            type="text"
            defaultValue="Doe"
            className="w-full rounded-lg border p-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium">Email Address</label>
        <input
          type="email"
          defaultValue="john@example.com"
          className="w-full rounded-lg border p-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium">Bio</label>
        <textarea
          rows={3}
          className="w-full rounded-lg border p-2 outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tell us about yourself..."
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
