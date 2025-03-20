interface Props {
  nama: string;
}

export default function Display({ nama }: Props) {
  return (
    <div>
      <h1>Hallo {nama}</h1>
    </div>
  );
}
