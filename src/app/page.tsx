import Sidebar from "@/components/Sidebar";

export default function Page() {
  return (
    <div className="flex flex-1">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Hello Next.js!</h1>
        <p className="text-gray-600">
          This is the main content area alongside the sidebar.
        </p>
      </main>
    </div>
  );
}
