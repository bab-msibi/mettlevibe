import Image from "next/image";

export default function Page() {
  return (
    <div className="mb-8 flex justify-center">
      <Image
        src="/tinkies.png"
        alt="event deatails"
        width={900}
        height={100}
        className="rounded-md object-contain"
      />
    </div>
  );
}
