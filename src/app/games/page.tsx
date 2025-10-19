import Sidebar from "@/components/Sidebar";

export default function Page() {
  return (
    <div>
        <Sidebar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
          <img
            src="/car.jpg"
            alt="Game 1"
            className="w-full h-80 object-cover"
          />
        </div>
        <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
          <img
            src="/cr.jpg"
            alt="Game 1"
            className="w-full h-80 object-cover"
          />
        </div>
        <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
          <img
            src="/fn.jpg"
            alt="Game 1"
            className="w-full h-80 object-cover"
          />
        </div>
        <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
          <img
            src="/urt2.jpg"
            alt="Game 1"
            className="w-full h-80 object-cover"
          />
        </div>
        <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
          <img
            src="/fps.jpg"
            alt="Game 1"
            className="w-full h-80 object-cover"
          />
        </div>
        <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
          <img
            src="/cod.jpg"
            alt="Game 1"
            className="w-full h-80 object-cover"
          />
        </div>
        <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
          <img
            src="/gb.jpg"
            alt="Game 1"
            className="w-full h-80 object-cover"
          />
        </div>
        <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
          <img
            src="/fifa.jpg"
            alt="Game 1"
            className="w-full h-80 object-cover"
          />
        </div>
        </div>
    </div>
  );
}