import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-1">
      <Sidebar />

      <main className="flex-1">
        <div className="Hero">
          <Image
            src="/pcb.png"
            alt="Hero Image"
            width={1200}
            height={200}
            className="rounded-md object-contain"
          />
          <div className="flex justify-between bg-black-sec border-rounded-md">
            <h1 className="text-amber-100 flex items-center text-center ml-4 font-bold">PC Builder PUBG Mobile Cup</h1>
            <button className="m-4 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition cursor-pointer">
              Join Event
            </button>
          </div>
        </div>
        <section>
          <h5 className="text-2xl font-bold mt-8 mb-2 ml-10">
            Upcoming Events
          </h5>
          <p className="mb-4 ml-10">
            Join us for thrilling gaming tournaments with exciting prizes!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            <div className="card1 bg-black-sec text-white rounded-xl shadow-md p-4 hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
              <div className="flex justify-between mb-4">
                <h3 className="text-red-700 font-bold">R1000</h3>
                <p className="text-red-400 font-bold">In Progress</p>
              </div>
              <Image
                src="/car.jpg"
                alt="Event 1"
                width={300}
                height={200}
                className="rounded-md object-cover"
              />
              <h3 className="text-xl font-semibold mt-2">Car Speed 2</h3>
            </div>
            <div className="card1 bg-black-sec text-white rounded-xl shadow-md p-4 hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
              <div className="flex justify-between mb-4">
                <h3 className="text-amber-500">R1000</h3>
                <p className="text-slate-400">October 18, 2025</p>
              </div>
              <Image
                src="/cod.jpg"
                alt="Event 2"
                width={300}
                height={200}
                className="rounded-md object-cover"
              />
              <h3 className="text-xl font-semibold mt-2">
                Call of Duty Showdown
              </h3>
            </div>
            <div className="card1 bg-black-sec text-white rounded-xl shadow-md p-4 hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
              <div className="flex justify-between mb-4">
                <h3 className="text-amber-500">R1000</h3>
                <p className="text-slate-400">October 22, 2025</p>
              </div>
              <Image
                src="/mk.jpg"
                alt="Event 3"
                width={300}
                height={200}
                className="rounded-md object-cover"
              />
              <h3 className="text-xl font-semibold mt-2">
                Mario Kart Tournament
              </h3>
            </div>
            <div className="card1 bg-black-sec text-white rounded-xl shadow-md p-4 hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
              <div className="flex justify-between mb-4">
                <h3 className="text-amber-500">R1000</h3>
                <p className="text-slate-400">October 25, 2025</p>
              </div>
              <Image
                src="/fn.jpg"
                alt="Event 4"
                width={300}
                height={200}
                className="rounded-md object-cover"
              />
              <h3 className="text-xl font-semibold mt-2">Fortnite Battle</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            <div className="card1 bg-black-sec text-white rounded-xl shadow-md p-4 hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
              <div className="flex justify-between mb-4">
                <h3 className="text-amber-500">R1000</h3>
                <p className="text-slate-400">October 29, 2025</p>
              </div>
              <Image
                src="/fifa.jpg"
                alt="Event 1"
                width={300}
                height={200}
                className="rounded-md object-cover"
              />
              <h3 className="text-xl font-semibold mt-2">FIFA Championship</h3>
            </div>
            <div className="card1 bg-black-sec text-white rounded-xl shadow-md p-4 hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
              <div className="flex justify-between mb-4">
                <h3 className="text-amber-500">R1000</h3>
                <p className="text-slate-400">Nov 03, 2025</p>
              </div>
              <Image
                src="/cr.jpg"
                alt="Event 2"
                width={300}
                height={200}
                className="rounded-md object-cover"
              />
              <h3 className="text-xl font-semibold mt-2">
                Clash Royale
              </h3>
            </div>
            <div className="card1 bg-black-sec text-white rounded-xl shadow-md p-4 hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
              <div className="flex justify-between mb-4">
                <h3 className="text-amber-500">R1000</h3>
                <p className="text-slate-400">Dec 18, 2025</p>
              </div>
              <Image
                src="/urt2.jpg"
                alt="Event 3"
                width={300}
                height={200}
                className="rounded-md object-cover"
              />
              <h3 className="text-xl font-semibold mt-2">
                Euro Truck 2
              </h3>
            </div>
            <div className="card1 bg-black-sec text-white rounded-xl shadow-md p-4 hover:shadow-2xl hover:scale-[1.03] hover:brightness-130 transition-all duration-300 transform cursor-pointer">
              <div className="flex justify-between mb-4">
                <h3 className="text-amber-500">R1000</h3>
                <p className="text-slate-400">Dec 18, 2025</p>
              </div>
              <Image
                src="/gb.jpg"
                alt="Event 4"
                width={300}
                height={200}
                className="rounded-md object-cover"
              />
              <h3 className="text-xl font-semibold mt-2">Gunship Battle</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
