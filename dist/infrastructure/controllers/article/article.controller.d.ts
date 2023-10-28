import { UseCaseProxy } from '../../usecases-proxy/usecases-proxy';
import { getArticleUseCases } from 'src/usecases/article/getArticle';
import { getArticlesUseCases } from 'src/usecases/article/getArticles';
import { updateArticleUseCases } from 'src/usecases/article/updateArticle';
import { deleteArticleUseCases } from 'src/usecases/article/deleteArticle';
import { addArticleUseCases } from 'src/usecases/article/addArticle';
import { AddArticleDto, UpdateArticleDto } from './article.dto';
import { ArticlePresenter } from './article.presenter';
export declare class ArticleController {
    private readonly getArticleUsecaseProxy;
    private readonly getAllArticlesUsecaseProxy;
    private readonly updateArticlesUsecaseProxy;
    private readonly deleteArticleUsecaseProxy;
    private readonly addArticleUsecaseProxy;
    constructor(getArticleUsecaseProxy: UseCaseProxy<getArticleUseCases>, getAllArticlesUsecaseProxy: UseCaseProxy<getArticlesUseCases>, updateArticlesUsecaseProxy: UseCaseProxy<updateArticleUseCases>, deleteArticleUsecaseProxy: UseCaseProxy<deleteArticleUseCases>, addArticleUsecaseProxy: UseCaseProxy<addArticleUseCases>);
    getArticle(id: number): Promise<ArticlePresenter>;
    getArticles(): Promise<ArticlePresenter[]>;
    updateArticle(updateArticleDto: UpdateArticleDto): Promise<string>;
    deleteArticle(id: number): Promise<string>;
    addArticle(addArticleDto: AddArticleDto): Promise<ArticlePresenter>;
}
