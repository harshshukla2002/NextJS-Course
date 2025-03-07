"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/${search}/`);
    setSearch("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center md:justify-between"
    >
      <input
        className="bg-white p-2 w-80 text-xl rounded-xl outline-none"
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button
        className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold cursor-pointer"
        type="submit"
      >
        🚀
      </button>
    </form>
  );
}
