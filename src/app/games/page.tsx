import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Sidebar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        <div className="bg-black-sec bg-cover bg-center text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer flex items-end justify-center h-80"
          style={{
            backgroundImage: "url('/car.jpg')",
          }}
        >
          <h2 className="text-2xl font-bold mb-4 text-white text-shadow-2xs text-shadow-cyan-950">
            Red Carer 2
          </h2>
        </div>

        <div className="bg-black-sec bg-cover bg-center text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer flex items-end justify-center h-80"
          style={{
            backgroundImage: "url('/cr.jpg')",
          }}
        >
          <h2 className="text-2xl font-bold mb-4 text-white text-shadow-2xs text-shadow-cyan-950">
            Clash Royale
          </h2>
        </div>
        <div className="bg-black-sec bg-cover bg-center text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer flex items-end justify-center h-80"
          style={{
            backgroundImage: "url('/fn.jpg')",
          }}
        >
          <h2 className="text-2xl font-bold mb-4 text-white text-shadow-2xs text-shadow-cyan-950">
            Forth Night
          </h2>
        </div>
        <div className="bg-black-sec bg-cover bg-center text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer flex items-end justify-center h-80"
          style={{
            backgroundImage: "url('/urt2.jpg')",
          }}
        >
          <h2 className="text-2xl font-bold mb-4 text-white text-shadow-2xs text-shadow-cyan-950">
            Euro Truck 2
          </h2>
        </div>
        <div className="bg-black-sec bg-cover bg-center text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer flex items-end justify-center h-80"
          style={{
            backgroundImage: "url('/FPS.jpg')",
          }}
        >
          <h2 className="text-2xl font-bold mb-4 text-white text-shadow-2xs text-shadow-cyan-950">
            Critical Striker
          </h2>
        </div>
        <div className="bg-black-sec bg-cover bg-center text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer flex items-end justify-center h-80"
          style={{
            backgroundImage: "url('/cod.jpg')",
          }}
        >
          <h2 className="text-2xl font-bold mb-4 text-white text-shadow-2xs text-shadow-cyan-950">
            Call Of Duty
          </h2>
        </div>
        <div className="bg-black-sec bg-cover bg-center text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer flex items-end justify-center h-80"
          style={{
            backgroundImage: "url('/gb.jpg')",
          }}
        >
          <h2 className="text-2xl font-bold mb-4 text-white text-shadow-2xs text-shadow-cyan-950">
            Gunship Battle
          </h2>
        </div>
        <div className="bg-black-sec bg-cover bg-center text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer flex items-end justify-center h-80"
          style={{
            backgroundImage: "url('/fifa.jpg')",
          }}
        >
          <h2 className="text-2xl font-bold mb-4 text-white text-shadow-2xs text-shadow-cyan-950">
            Fifa 2025
          </h2>
        </div>
      </div>
    </div>
  );
}
