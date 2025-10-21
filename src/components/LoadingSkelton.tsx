export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-[300px] space-y-4">
      <div className="w-3/4 h-6 bg-gray-700 rounded animate-pulse" />
      <div className="w-1/2 h-6 bg-gray-700 rounded animate-pulse" />
      <div className="w-2/3 h-6 bg-gray-700 rounded animate-pulse" />
    </div>
  );
}