import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <span className="text-5xl">Hello world</span>
      <Link href={'/about'}>About</Link>
    </div>
  );
}
