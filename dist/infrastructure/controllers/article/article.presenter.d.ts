import { ArticleM } from 'src/domain/model/article';
export declare class ArticlePresenter {
    id: number;
    content: string;
    title: string;
    createdate: Date;
    updateddate: Date;
    constructor(article: ArticleM);
}
