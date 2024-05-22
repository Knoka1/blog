import { formatDate } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
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
    <article className="container py-6 prose dark:prose-invert max-w-5xl mx-auto">
      <h1 className="mb-2 text-3xl font-bold">{post.title}</h1>
      <div className="flex justify-between items-center mb-5 text-muted-foreground">
        <dl>
          <dt className="sr-only">Publicado Em</dt>
          <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
            <CalendarIcon className="h-4 w-4" />
            <span>Postado em </span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </dd>
        </dl>
      </div>
      <div className="flex gap-2 mb-2">
        {post.description ? (
          <p className="text-xl mt-0 text-muted-foreground">
            {post.description}
          </p>
        ) : null}
      </div>
      <hr className="my-4" />
      <div className="flex gap-2 mb-2 text-1xl leading-7">{post.content}</div>
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
