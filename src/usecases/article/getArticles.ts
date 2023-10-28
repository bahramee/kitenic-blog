import { Injectable } from "@nestjs/common";
import { ArticleM } from "src/domain/model/article";
import { ArticleRepository } from "src/domain/repositories/articleRepository.interface";

@Injectable()
export class getArticlesUseCases {
  constructor(private readonly articleRepository: ArticleRepository) {}

  async execute(): Promise<ArticleM[]> {
    return await this.articleRepository.findAll();
  }
}