import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/setting"}>Setting</Link>
    </div>
  );
}
