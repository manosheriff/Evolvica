export function StatCard({ title, value, icon: Icon, trend }: any) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase text-gray-500">
            {title}
          </p>
          <h3 className="mt-1 text-2xl font-bold">{value}</h3>
          <span className="text-xs font-medium text-green-500">
            {trend} from last month
          </span>
        </div>
        <div className="rounded-lg bg-blue-50 p-3">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
      </div>
    </div>
  );
}
