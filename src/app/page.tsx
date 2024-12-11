import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function HomePage() {
  return (
    <div className="flex items-center gap-2">
      <Button asChild>
        <Link href="/posts">Go to Posts</Link>
      </Button>
      <Button asChild>
        <Link href="/profile">Go to Profile</Link>
      </Button>
    </div>
  );
}
