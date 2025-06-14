export interface Comment {
  id: string;
  articleId: string;
  author: {
    id: string;
    username: string;
    avatar: string;
  };
  content: string;
  createdAt: Date;
}
