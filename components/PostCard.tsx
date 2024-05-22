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
      <div className="inline-flex">
        <div className="mt-4 flex flex-wrap gap-1">
          <span className="inline-flex whitespace-nowrap rounded-full bg-emerald-100 px-2.5 py-1 text-xs text-emerald-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="-ms-1 me-1.5 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Energia Sustentável
          </span>

          <span className="inline-flex whitespace-nowrap rounded-full bg-amber-100 px-2.5 py-1 text-xs text-amber-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="-ms-1 me-1.5 h-4 w-4"
            >
              <path d="M3 3v18h18" />
              <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
            </svg>
            Em Alta
          </span>
        </div>
      </div>

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
