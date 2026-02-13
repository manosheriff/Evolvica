import ProfileSettings from '../components/ProfileSettings';
import SecuritySettings from '../components/SecuritySettings';

export default function SettingsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Profile Section */}
        <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 p-6">
            <h2 className="text-lg font-semibold">Public Profile</h2>
            <p className="text-sm text-gray-500">
              This information will be displayed to other admins.
            </p>
          </div>
          <div className="p-6">
            <ProfileSettings />
          </div>
        </section>

        {/* Security Section */}
        <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 p-6">
            <h2 className="text-lg font-semibold">Security</h2>
            <p className="text-sm text-gray-500">
              Update your password and secure your account.
            </p>
          </div>
          <div className="p-6">
            <SecuritySettings />
          </div>
        </section>
      </div>
    </div>
  );
}
