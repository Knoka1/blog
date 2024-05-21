import { NextResponse } from "next/server";

type Post = {
  id: number;
  title: string;
  content: string;
};

let posts: Post[] = [
  { id: 1, title: "First Post", content: "This is the first post" },
  { id: 2, title: "Second Post", content: "This is the second post" },
];

export async function GET() {
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const { title, content } = await request.json();
  const newPost = { id: posts.length + 1, title, content };
  posts.push(newPost);
  return NextResponse.json(newPost, { status: 201 });
}
