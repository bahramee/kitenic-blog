import { ArticleM } from 'src/domain/model/article';
import { ArticleRepository } from 'src/domain/repositories/articleRepository.interface';
import { ILogger } from '../../domain/logger/logger.interface';

export class addArticleUseCases {
  constructor(private readonly logger: ILogger, private readonly articleRepository: ArticleRepository) {}

  async execute(title: string, content: string): Promise<ArticleM> {
    const article = new ArticleM();
    article.title = title
    article.content = content;
    const result = await this.articleRepository.insert(article);
    this.logger.log('addArticle execute', 'New article have been inserted');
    return result;
  }
}
