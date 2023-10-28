import { ArticleM } from '../model/article';

export interface ArticleRepository {
  insert(article: ArticleM): Promise<ArticleM>;
  findAll(): Promise<ArticleM[]>;
  findById(id: number): Promise<ArticleM>;
  update(id: number, article: ArticleM): Promise<void>;
  deleteById(id: number): Promise<void>;
}
