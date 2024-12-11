import prisma from "@/lib/prisma";
import Posts from "./posts";

export default async function PostsPage() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  if (posts.length === 0) return <div>Add more posts...</div>;

  return <Posts posts={posts} />;
}
