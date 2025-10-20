import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Page() {
  return (
    <div>
        <Sidebar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
          <Image
            src="/car.jpg"
            alt="Game 1"
            width={700}
            height={400}
            className="w-full h-80 object-cover"
          />
        </div>
        <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">    
          <Image
            src="/cr.jpg"
            alt="Game 2"
            width={700}
            height={400}
            className="w-full h-80 object-cover"
          />
        </div>
        <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
          <Image
            src="/fn.jpg"
            alt="Game 3"
            width={700}
            height={400}
            className="w-full h-80 object-cover"
          />
        </div>
        <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
          <Image
            src="/urt2.jpg"
            alt="Game 4"
            width={700}
            height={400}
            className="w-full h-80 object-cover"
          />
        </div>
        <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
          <Image
            src="/fps.jpg"
            alt="Game 5"
            width={700}
            height={400}
            className="w-full h-80 object-cover"
          />
        </div>
        <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
         <Image
            src="/cod.jpg"
            alt="Game 6"
            width={700}
            height={400}
            className="w-full h-80 object-cover"
          />
        </div>
        <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
         <Image
            src="/gb.jpg"
            alt="Game 7"
            width={700}
            height={400}
            className="w-full h-80 object-cover"
          />
        </div>
        <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
         <Image
            src="/fifa.jpg"
            alt="Game 8"
            width={700}
            height={400}
            className="w-full h-80 object-cover"
          />
        </div>
        </div>
    </div>
  );
}