import { RevenueChart } from '../components/revenue-chart';
import { DeviceCategoryChart } from '../components/device-chart';
import { TrendingUp, Users, MousePointer2 } from 'lucide-react';
import { StatCard } from '../components/stat-card';
export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Analytics Workspace
        </h1>
        <p className="text-gray-500">
          {`Track your platform's performance and user behavior.`}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <StatCard
          title="Conversion Rate"
          value="3.2%"
          icon={TrendingUp}
          trend="+0.4%"
        />
        <StatCard
          title="Avg. Session"
          value="4m 12s"
          icon={Users}
          trend="-2%"
        />
        <StatCard
          title="Bounce Rate"
          value="42%"
          icon={MousePointer2}
          trend="+1.2%"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
          <h3 className="mb-4 font-semibold">Revenue Growth</h3>
          <RevenueChart />
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-semibold">Traffic by Device</h3>
          <DeviceCategoryChart />
        </div>
      </div>
    </div>
  );
}
