import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex items-center justify-between px-5 border-b border-black/10 h-[50px]">
        <Link href="/"><Image
        src="/next.svg"
        alt="Logo"
        width={100}
        height={100}
        priority
        /> </Link>

        <div>
            <ul className="flex gap-6 text-sm font-medium">
                <li><Link href="blog">About</Link></li>
                <li><Link href="blog">Logout</Link></li>
            </ul>
        </div>
    </div>
  );
}