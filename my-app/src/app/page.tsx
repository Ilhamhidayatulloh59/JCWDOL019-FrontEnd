import Display from "@/components/display";

export default function Page() {
  const name: string = "Caca";
  return (
    <div>
      <h1 className="halo">Hello World</h1>
      <h2 style={{ color: "green", fontSize: "40px" }}>{name.toUpperCase()}</h2>
      <Display nama={name} />
    </div>
  );
}
