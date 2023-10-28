import { ArticleM } from 'src/domain/model/article';
import { ArticleRepository } from 'src/domain/repositories/articleRepository.interface';
import { ILogger } from '../../domain/logger/logger.interface';
export declare class addArticleUseCases {
    private readonly logger;
    private readonly articleRepository;
    constructor(logger: ILogger, articleRepository: ArticleRepository);
    execute(title: string, content: string): Promise<ArticleM>;
}
