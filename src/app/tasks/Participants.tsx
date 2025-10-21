import Image from "next/image";

export default function Page() {
  return (
    <div>
      <h1 className="text-4xl font-bold pl-6">Participants</h1>
      <div className="grid grid-cols-6 gap-4 p-6">
        <div className="bg-black-sec text-white rounded-2xl pt-12 hover:shadow-lg hover:scale-[1.03] hover:brightness-130 transition-all transform duration-300 cursor-pointer">
          <div className="flex justify-center">
            <Image
              src="/user2.jpg"
              alt="user2"
              width={150}
              height={150}
              className="rounded-full justify-center"
            />
          </div>
          <h2 className="text-center pt-6 pb-12">Sniper_Z</h2>
        </div>
        <div className="bg-black-sec text-white rounded-2xl pt-12 hover:shadow-lg hover:scale-[1.03] hover:brightness-130 transition-all transform duration-300 cursor-pointer">
          <div className="flex justify-center">
            <Image
              src="/User-No-Background.png"
              alt="user1"
              width={150}
              height={150}
              className="rounded-full justify-center"
            />
          </div>
          <h2 className="text-center pt-6 pb-12">H_way</h2>
        </div>
        <div className="bg-black-sec text-white rounded-2xl pt-12 hover:shadow-lg hover:scale-[1.03] hover:brightness-130 transition-all transform duration-300 cursor-pointer">
          <div className="flex justify-center">
            <Image
              src="/User-No-Background.jpg"
              alt="user1"
              width={150}
              height={150}
              className="rounded-full justify-center"
            />
          </div>
          <h2 className="text-center pt-6 pb-12">Raiza</h2>
        </div>
        <div className="bg-black-sec text-white rounded-2xl pt-12 hover:shadow-lg hover:scale-[1.03] hover:brightness-130 transition-all transform duration-300 cursor-pointer">
          <div className="flex justify-center">
            <Image
              src="/user1.jpg"
              alt="user1"
              width={150}
              height={150}
              className="rounded-full justify-center"
            />
          </div>
          <h2 className="text-center pt-6 pb-12">Tank</h2>
        </div>
        <div className="bg-black-sec text-white rounded-2xl pt-12 hover:shadow-lg hover:scale-[1.03] hover:brightness-130 transition-all transform duration-300 cursor-pointer">
          <div className="flex justify-center">
            <Image
              src="/User-No-Background.png"
              alt="user1"
              width={150}
              height={150}
              className="rounded-full justify-center"
            />
          </div>
          <h2 className="text-center pt-6 pb-12">Shark</h2>
        </div>
        <div className="bg-black-sec text-white rounded-2xl pt-12 hover:shadow-lg hover:scale-[1.03] hover:brightness-130 transition-all transform duration-300 cursor-pointer">
          <div className="flex justify-center">
            <Image
              src="/User-No-Background.png"
              alt="user1"
              width={150}
              height={150}
              className="rounded-full justify-center"
            />
          </div>
          <h2 className="text-center pt-6 pb-12">Bruce</h2>
        </div>
        <div className="bg-black-sec text-white rounded-2xl pt-12 hover:shadow-lg hover:scale-[1.03] hover:brightness-130 transition-all transform duration-300 cursor-pointer">
          <div className="flex justify-center">
            <Image
              src="/User-No-Background.jpg"
              alt="user1"
              width={150}
              height={150}
              className="rounded-full justify-center"
            />
          </div>
          <h2 className="text-center pt-6 pb-12">Aura</h2>
        </div>

        <div className="bg-black-sec text-white rounded-2xl pt-12 hover:shadow-lg hover:scale-[1.03] hover:brightness-130 transition-all transform duration-300 cursor-pointer">
          <div className="flex justify-center">
            <Image
              src="/User-No-Background.jpg"
              alt="user1"
              width={150}
              height={150}
              className="rounded-full justify-center"
            />
          </div>
          <h2 className="text-center pt-6 pb-12">Dusty</h2>
        </div>
        <div className="bg-black-sec text-white rounded-2xl pt-12 hover:shadow-lg hover:scale-[1.03] hover:brightness-130 transition-all transform duration-300 cursor-pointer">
          <div className="flex justify-center">
            <Image
              src="/User-No-Background.png"
              alt="user1"
              width={150}
              height={150}
              className="rounded-full justify-center"
            />
          </div>
          <h2 className="text-center pt-6 pb-12">Zyn</h2>
        </div>
      </div>
    </div>
  );
}
