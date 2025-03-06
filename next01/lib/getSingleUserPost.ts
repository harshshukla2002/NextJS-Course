export default async function getSingleUserPost(id: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );

  if (!res.ok) {
    return undefined;
  }

  return res.json();
}
