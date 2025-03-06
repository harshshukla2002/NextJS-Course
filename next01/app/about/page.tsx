import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "About Page",
  description: "Learning NextJS",
};

export default function About() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1>About Page</h1>

      <Link href="/" className="text-blue-500">
        Home
      </Link>
    </main>
  );
}
