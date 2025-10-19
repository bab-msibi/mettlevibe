import Image from "next/image";

export default function Page() {
  return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
            <Image 
            src="/car.jpg"
            alt="Game 1"
            width={400}
            height={240}
            className="w-full h-60 object-cover"
            />
            <div className="p-4 flex justify-between">
              <p className="text-gray-100 font-semibold">Car Race 2</p>
              <p className="text-amber-500 font-bold text-sm">R1000</p>
            </div>
          </div>
          <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
            <Image 
            src="/fps.jpg"
            alt="Game 2"
            width={400}
            height={240}
            className="w-full h-60 object-cover"
            />
            <div className="p-4 flex justify-between">
              <p className="text-gray-100 font-semibold">Shainline</p>
              <p className="text-amber-500 font-bold text-sm">R1000</p>
            </div>
          </div>
          <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
            <Image 
            src="/fifa.jpg"
            alt="Game 3"
            width={400}
            height={240}
            className="w-full h-60 object-cover"
            />
            <div className="p-4 flex justify-between">
              <p className="text-gray-100 font-semibold">Fifa 2019</p>
              <p className="text-amber-500 font-bold text-sm">R1000</p>
            </div>
          </div>
          <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
            <Image 
            src="/gb.jpg"
            alt="Game 4"
            width={400}
            height={240}
            className="w-full h-60 object-cover"
            />
            <div className="p-4 flex justify-between">
              <p className="text-gray-100 font-semibold">Gunship Battle</p>
              <p className="text-amber-500 font-bold text-sm">R1000</p>
            </div>
          </div>
        </div>
  );
}