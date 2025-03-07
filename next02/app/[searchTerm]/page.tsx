import getWikiResult from "@/lib/getWikiResult";
import React from "react";
import Items from "./components/Items";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ searchTerm: string }>;
}) {
  const { searchTerm } = await params;
  const wikiData: SearchResult = await getWikiResult(searchTerm);
  const displayTerm = searchTerm.replace("%20", " ");

  if (!wikiData?.query?.pages) {
    return {
      title: `${displayTerm} Not Found`,
      description: `${displayTerm} Not Found`,
    };
  }

  return {
    title: displayTerm,
    description: `Search result for ${displayTerm}`,
  };
}

export default async function SearchTerm({
  params,
}: {
  params: Promise<{ searchTerm: string }>;
}) {
  const { searchTerm } = await params;
  const wikiData: SearchResult = await getWikiResult(searchTerm);
  const results: Result[] | undefined = wikiData?.query?.pages;

  return (
    <main className="bg-slate-200 mx-auto max-w-2xl py-2 min-h-screen my-5">
      {results ? (
        Object.values(results).map((result) => {
          return <Items key={result.pageid} result={result} />;
        })
      ) : (
        <h2 className="p-2 text-xl text-center mt-[10%]">
          {searchTerm} Not Found
        </h2>
      )}
    </main>
  );
}
