declare type Post = {
  id: number;
  title: string;
  description: string;
  content: string;
  date: string;
};

declare interface PostProps {
  params: {
    id: string;
  };
}
