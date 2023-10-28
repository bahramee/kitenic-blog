import { ArticleM } from 'src/domain/model/article';
import { ArticleRepository } from 'src/domain/repositories/articleRepository.interface';
import { Article } from '../entities/article.entity';
import { Repository } from 'typeorm';
export declare class DatabaseArticleRepository implements ArticleRepository {
    private readonly articleEntityRepository;
    constructor(articleEntityRepository: Repository<Article>);
    insert(article: ArticleM): Promise<ArticleM>;
    findAll(): Promise<ArticleM[]>;
    findById(id: number): Promise<ArticleM>;
    update(id: number, article: ArticleM): Promise<void>;
    deleteById(id: number): Promise<void>;
    private toArticle;
    private toArticleEntity;
}
