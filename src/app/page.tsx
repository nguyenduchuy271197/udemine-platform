import Link from "next/link";

export default async function HomePage() {
  return (
    <div>
      <Link href="/posts">Go to Posts</Link>
    </div>
  );
}
