export function StatCard({
  title,
  value,
  trend,
}: {
  title: string;
  value: string;
  icon: React.ComponentType;
  trend: string;
}) {
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
        <div className="rounded-lg bg-blue-50 p-3"></div>
      </div>
    </div>
  );
}
