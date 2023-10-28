import { ArticleM } from "src/domain/model/article";
import { ArticleRepository } from "src/domain/repositories/articleRepository.interface";
export declare class getArticlesUseCases {
    private readonly articleRepository;
    constructor(articleRepository: ArticleRepository);
    execute(): Promise<ArticleM[]>;
}
