declare type Post = {
  id: number;
  title: string;
  content: string;
};

declare interface PostProps {
  params: {
    id: string;
  };
}
