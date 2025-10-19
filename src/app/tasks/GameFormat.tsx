import { Settings } from "lucide-react";

export default function Page() {
  return (
     <div className="grid grid-cols-4 gap-6 p-6">
          <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold">Game</h3>
              <Settings size={20} className="text-amber-400" />
            </div>

            <h3 className="p-4 text-xl font-bold">PUGNHB</h3>
          </div>
          <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold">Game</h3>
              <Settings size={20} className="text-amber-400" />
            </div>

            <h3 className="p-4 text-xl font-bold">PUGNHB</h3>
          </div>
          <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold">Game</h3>
              <Settings size={20} className="text-amber-400" />
            </div>

            <h3 className="p-4 text-xl font-bold">PUGNHB</h3>
          </div>
          <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold">Game</h3>
              <Settings size={20} className="text-amber-400" />
            </div>

            <h3 className="p-4 text-xl font-bold">PUGNHB</h3>
          </div>
        </div>
  );
}