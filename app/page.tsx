import Hero from "@/components/Hero";
import PostCard from "@/components/PostCard";
import { Suspense } from "react";

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
          <Hero />
        </div>
      </div>
      <span className="relative flex justify-center mt-8">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
      </span>

      {posts?.length > 0 ? (
        posts.map((post) => (
          <Suspense key={`Suspense_${post.id}`} fallback={"Loading..."}>
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description}
              content={post.content}
              date={post.date}
            />
          </Suspense>
        ))
      ) : (
        <p>Nothing to see yet</p>
      )}
    </div>
  );
};
export default Home;
