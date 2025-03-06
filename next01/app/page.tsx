import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "Learning NextJS",
};

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1>Home Page</h1>

      <Link href="/about" className="text-blue-500">
        About
      </Link>
      <Link href="/users" className="text-blue-500">
        Users
      </Link>
    </main>
  );
}
