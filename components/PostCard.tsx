import { cn, formatDate } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";

const PostCard = ({ id, title, description, date }: Post) => {
  return (
    <article className="flex flex-col gap-2 border-border border-b py-3">
      <div>
        <h2 className="text-2xl font-bold">
          <Link href={`/post/${id}`}>{title}</Link>
        </h2>
      </div>
      <div className="max-w-none text-muted-foreground">{description}</div>
      <div className="flex justify-between items-center">
        <dl>
          <dt className="sr-only">Publicado Em</dt>
          <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
            <CalendarIcon className="h-4 w-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <Link
          href={`/post/${id}`}
          className={cn(buttonVariants({ variant: "link" }), "py-0")}
        >
          Leia Mais →
        </Link>
      </div>
    </article>
  );
};

export default PostCard;
