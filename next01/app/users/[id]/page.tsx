import getAllUsers from "@/lib/getAllUsers";
import getSingleUser from "@/lib/getSingleUser";
import getSingleUserPost from "@/lib/getSingleUserPost";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user: User = await getSingleUser(id);

  if (!user?.name) {
    return {
      title: "User not found",
      description: "User not found",
    };
  }

  return {
    title: user.name,
    description: `this is the page of user ${user.name}`,
  };
}

export default async function UserProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user: User = await getSingleUser(id);
  const userPost: Post[] = await getSingleUserPost(id);

  if (!user?.name) {
    return notFound();
  }

  return (
    <div className="m-10">
      <h3>
        <Link href={"/users"} className="text-red-500 underline ml-[5%]">
          Back to users
        </Link>
      </h3>
      <div className="w-[45%] m-auto mt-5 p-2 rounded">
        <h3 className="text-2xl">{user.name}</h3>
        <p>
          <span className="font-bold">Email: </span> {user.email}
        </p>
        <p>
          <span className="font-bold">Address: </span> {user.address.suite},{" "}
          {user.address.street}, {user.address.city}, {user.address.zipcode}
        </p>
        <p>
          <span className="font-bold">Phone: </span> {user.phone}
        </p>
        <p>
          <span className="font-bold">Website: </span> {user.website}
        </p>
        <p>
          <span className="font-bold">Company: </span> {user.company.name}
        </p>
      </div>
      <h2 className="text-2xl underline text-center my-5">Posts-</h2>
      <div className="flex flex-row gap-10 flex-wrap w-[80%] m-auto mb-10">
        {userPost.map((post) => {
          return (
            <article
              className="w-[45%] m-auto mt-5 border-2 p-2 rounded"
              key={post.id}
            >
              <h3 className="font-bold capitalize">{post.title}</h3>
              <p className="ml-2">{post.body.substring(1, 80)}...</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const users: User[] = await getAllUsers();

  return users.map((user) => ({
    id: user.id.toString(),
  }));
}
