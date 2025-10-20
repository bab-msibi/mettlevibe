import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <Sidebar />
      <div className="flex flex-col items-center justify-center text-white pt-20">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/" className="text-amber-700 font-bold pt-10">Return Home</Link>
      </div>
    </div>
  );
}
