import { ArticleM } from "src/domain/model/article";
import { ArticleRepository } from "src/domain/repositories/articleRepository.interface";

export class getArticleUseCases {
  constructor(private readonly articleRepository: ArticleRepository) {}

  async execute(id: number): Promise<ArticleM> {
    return await this.articleRepository.findById(id);
  }
}