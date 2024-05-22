import { notFound } from "next/navigation";

const fetchPost = async (id: string): Promise<Post> => {
  const res = await fetch(`http://localhost:3000/api/posts?id=${id}`, {
    next: { revalidate: 2 },
  });
  if (!res.ok) {
    throw new Error(
      "Failed to fetch post, please check if the post id is correct"
    );
  }
  return res.json();
};

const PostPage = async ({ params }: PostProps) => {
  const { id } = params;
  const post = await fetchPost(id);
  console.log(post);
  if (!post) {
    notFound();
  }

  return (
    <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
      <h1 className="mb-2">{post.title}</h1>
      <div className="flex gap-2 mb-2"></div>
      {post.description}
      {post.content}
      {/* {post.description ? (
        <p className="text-xl mt-0 text-muted-foreground">{post.description}</p>
      ) : null} */}
      <hr className="my-4" />
    </article>
  );
};

export default PostPage;

export async function generateStaticParams() {
  const res = await fetch("http://localhost:3000/api/posts");
  const posts: Post[] = await res.json();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
