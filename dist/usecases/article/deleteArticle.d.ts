import { ArticleRepository } from 'src/domain/repositories/articleRepository.interface';
import { ILogger } from '../../domain/logger/logger.interface';
export declare class deleteArticleUseCases {
    private readonly logger;
    private readonly articleRepository;
    constructor(logger: ILogger, articleRepository: ArticleRepository);
    execute(id: number): Promise<void>;
}
