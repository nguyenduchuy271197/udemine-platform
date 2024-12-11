import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const { userId } = await auth();

  if (!userId) redirect("/");

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) return <div>Can not find user that have id: {userId}</div>;

  return (
    <div>
      <p>Email: {user.email}</p>
      <p>
        Name: {user.firstName} {user.lastName}
      </p>
    </div>
  );
}
