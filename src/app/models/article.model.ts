export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  images: string[];
  videos: string[];
  author: {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    avatar?: string;
  };
  categories: Category[];
  tags: Tag[];
  status: 'draft' | 'published' | 'archived';
  isPublished: boolean;
  publishedAt?: Date;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  readingTime: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface Category {
  id: string;
  name: string;
  slug: string;
}
export interface Tag {
  id: string;
  name: string;
  slug: string;
}