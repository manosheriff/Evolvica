import Sidebar from './components/sidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <header />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
      ``
    </div>
  );
}
