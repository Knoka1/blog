declare type Post = {
  id: number;
  title: string;
  description: string;
  content: string;
  date: Date;
};

declare interface PostProps {
  params: {
    id: string;
  };
}
