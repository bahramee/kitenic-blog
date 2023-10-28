import { ArticleM } from 'src/domain/model/article';

export class ArticlePresenter {
  id: number;
  content: string;
  title: string;
  createdate: Date;
  updateddate: Date;

  constructor(article: ArticleM) {
    this.id = article.id;
    this.content = article.content;
    this.title = article.title;
    this.createdate = article.createddate;
    this.updateddate = article.updateddate;
  }
}
