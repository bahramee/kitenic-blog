import { ArticleM } from "src/domain/model/article";
import { ArticleRepository } from "src/domain/repositories/articleRepository.interface";
export declare class getArticleUseCases {
    private readonly articleRepository;
    constructor(articleRepository: ArticleRepository);
    execute(id: number): Promise<ArticleM>;
}
