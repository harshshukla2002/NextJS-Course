import getAllUsers from "@/lib/getAllUsers";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Users",
  description: "Learning NextJS",
};

export default async function Users() {
  const userData: Promise<User[]> = getAllUsers();
  const users = await userData;

  return (
    <section className="m-10">
      <h3>
        <Link href={"/"} className="text-red-600 underline ml-[5%]">
          Back to home
        </Link>
      </h3>
      <br />
      <div className="flex flex-row gap-10 flex-wrap w-[80%] m-auto mb-10">
        {users.map((user) => {
          return (
            <div
              key={user.id}
              className="w-[45%] border-2 p-2 rounded hover:border-blue-600"
            >
              <Link href={`/users/${user.id}`} className="hover:text-blue-500">
                <h3 className="text-2xl">{user.name}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
