import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Interface cho data type
interface Author {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string;
}

interface Post {
  id: string;
  title: string;
  content: string | null;
  published: boolean;
  createdAt: Date;
  author: Author;
}

interface PostListProps {
  posts: Post[];
}

const Posts = ({ posts }: PostListProps) => {
  return (
    <div className="grid gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Card key={post.id} className="flex flex-col">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${
                    post.author.firstName || "User"
                  }`}
                />
                <AvatarFallback>
                  {post.author.firstName?.[0] || "U"}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">{post.title}</CardTitle>
                <CardDescription>
                  by {post.author.firstName || "Anonymous"}
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex-grow">
            <p className="text-sm text-gray-600 line-clamp-3">
              {post.content || "No content"}
            </p>
          </CardContent>

          <CardFooter className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Badge variant={post.published ? "default" : "secondary"}>
                {post.published ? "Published" : "Draft"}
              </Badge>
              <span className="text-sm text-gray-500">
                {new Date(post.createdAt).toLocaleDateString()}
              </span>
            </div>
            <Button variant="outline" size="sm">
              Read more
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Posts;
