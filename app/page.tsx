import PostCard from "@/components/PostCard";
import Image from "next/image";
import Link from "next/link";

const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch("http://localhost:3000/api/posts", {
    next: { revalidate: 1 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};
const Home = async () => {
  const posts = await fetchPosts();
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">
            All things oil and tech
          </p>
        </div>
      </div>
      <hr className="mt-8" />
      <h1>All Posts</h1>
      {posts?.length > 0 ? (
        posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
          />
        ))
      ) : (
        <p>Nothing to see yet</p>
      )}
    </div>
  );
};
export default Home;
