interface IArticle {
  id: number;
  title: string;
  author: string;
  type: string;
  content: string;
  status: string;
  pageviews: number;
  created_at: string;
}

export type {IArticle}