import { ArticleM } from 'src/domain/model/article';
import { ArticleRepository } from 'src/domain/repositories/articleRepository.interface';
import { ILogger } from '../../domain/logger/logger.interface';

export class updateArticleUseCases {
  constructor(private readonly logger: ILogger, private readonly articleRepository: ArticleRepository) {}

  async execute(id: number, title: string, content: string): Promise<void> {
    const article = new ArticleM();
    article.content = content;
    article.title = title
    await this.articleRepository.update(id, article);
    this.logger.log('updateArticleUseCases execute', `Article ${id} have been updated`);
  }
}
