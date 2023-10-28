import { ArticleRepository } from 'src/domain/repositories/articleRepository.interface';
import { ILogger } from '../../domain/logger/logger.interface';
export declare class updateArticleUseCases {
    private readonly logger;
    private readonly articleRepository;
    constructor(logger: ILogger, articleRepository: ArticleRepository);
    execute(id: number, title: string, content: string): Promise<void>;
}
