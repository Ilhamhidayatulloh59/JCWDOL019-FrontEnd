import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex h-[60px] px-14 w-screen bg-blue-500 max-sm:bg-red-500 max-lg:bg-yellow-500 text-white justify-between items-center">
      <div>Logo</div>
      <div className="flex gap-4">
        <Link className="hover:font-bold" href={"/"}>
          Home
        </Link>
        <Link className="hover:font-bold" href={"/about"}>
          About
        </Link>
        <Link className="hover:font-bold" href={"/contact"}>
          Contact
        </Link>
      </div>
    </div>
  );
}
