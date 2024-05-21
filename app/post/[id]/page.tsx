const fetchPost = async (id: string): Promise<Post> => {
  const res = await fetch(`http://localhost:3000/api/posts?id=${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  return res.json();
};

const PostPage = async ({ params }: PostProps) => {
  const { id } = params;
  const post = await fetchPost(id);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
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
