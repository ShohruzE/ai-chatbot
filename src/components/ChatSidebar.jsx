import Link from "next/link";

export default function ChatSidebar() {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4">
      {/* Logo */}
      <div className="text-white mb-4">
        <div className="text-2xl font-bold">DELTA</div>
      </div>
      {/* Menu */}
      {/* <div className="flex flex-col gap-4">
        <button className="bg-red-600 text-white py-2 px-4 rounded">
          Lorem ipsum
        </button>
        <button className="bg-red-600 text-white py-2 px-4 rounded">
          Lorem ipsum
        </button>
        <button className="bg-red-600 text-white py-2 px-4 rounded">
          Lorem ipsum
        </button>
      </div> */}
      {/* Bottom Buttons */}
      <div className="flex justify-center items-center">
        <Link
          href="/"
          className="bg-red-600 text-white py-2 px-4 rounded text-center w-full"
        >
          Exit Delta AI
        </Link>
      </div>
    </div>
  );
}
