export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  images: string[];
 videos: ArticleVideo[];
  author: {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    avatar?: string;
  };
  categories: Category[];
  tags: Tag[];
  status: 'draft' | 'published' | 'archived'  | 'pending';
  isPublished: boolean;
  publishedAt?: Date;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  readingTime: number;
  createdAt: Date;
  updatedAt: Date;
}
// src/app/models/article.model.ts
export interface Category {
  id: string; // <-- adapte ici (remplace 'string' si nécessaire)
  name: string;
  slug?: string;
}

export interface Tag {
  id: string; // <-- adapte ici aussi
  name: string;
  slug?: string;
}
export interface ArticleVideo {
  url: string;
  title: string;
  provider: 'youtube' | 'vimeo' | 'other';
}
export interface ArticleResponse {
  articles: Article[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}
