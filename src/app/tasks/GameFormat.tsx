import { Settings } from "lucide-react";

export default function Page() {
  return (
     <div className="grid grid-cols-4 gap-6 p-6">
          <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold">Game</h3>
              <Settings size={20} className="text-amber-400" />
            </div>

            <h1 className="p-4 font-bold">PUGNHB</h1>
          </div>
          <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold">Team Size</h3>
              <Settings size={20} className="text-amber-400" />
            </div>

            <h1 className="p-4  font-bold">1 VS 1</h1>
          </div>
          <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold">Price Pool</h3>
              <Settings size={20} className="text-amber-400" />
            </div>

            <h1 className="p-4  font-bold">R1000</h1>
          </div>
          <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold">Registered</h3>
              <Settings size={20} className="text-amber-400" />
            </div>

            <h1 className="p-4 font-bold">100</h1>
          </div>
        </div>
  );
}