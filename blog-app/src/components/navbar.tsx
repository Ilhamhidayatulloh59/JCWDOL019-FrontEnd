import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-[60px] w-screen bg-orange-500 px-28 max-sm:px-5 flex items-center justify-between">
      <p>LOGO</p>
      <div className="flex gap-5">
        <Link href={"/login"}>Login</Link>
        <Link href={"/register"}>Register</Link>
      </div>
    </div>
  );
}
