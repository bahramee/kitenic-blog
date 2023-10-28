import { ArticleRepository } from 'src/domain/repositories/articleRepository.interface';
import { ILogger } from '../../domain/logger/logger.interface';

export class deleteArticleUseCases {
  constructor(private readonly logger: ILogger, private readonly articleRepository: ArticleRepository) {}

  async execute(id: number): Promise<void> {
    await this.articleRepository.deleteById(id);
    this.logger.log('deleteArticleUseCases execute', `Article ${id} have been deleted`);
  }
}
