
import { DynamicModule, Module } from '@nestjs/common';
import { addArticleUseCases } from 'src/usecases/article/addArticle';
import { deleteArticleUseCases } from 'src/usecases/article/deleteArticle';
import { getArticleUseCases } from 'src/usecases/article/getArticle';
import { getArticlesUseCases } from 'src/usecases/article/getArticles';
import { updateArticleUseCases } from 'src/usecases/article/updateArticle';
import { ExceptionsModule } from '../exceptions/exceptions.module';
import { LoggerModule } from '../logger/logger.module';
import { LoggerService } from '../logger/logger.service';
import { DatabaseArticleRepository } from '../repositories/article.repository';
import { RepositoriesModule } from '../repositories/repositories.module';
import { UseCaseProxy } from './usecases-proxy';

@Module({
  imports: [LoggerModule, RepositoriesModule, ExceptionsModule],
})
export class UsecasesProxyModule {
  static GET_ARTICLE_USECASES_PROXY = 'getArticleUsecasesProxy';
  static GET_ARTICLES_USECASES_PROXY = 'getArticlesUsecasesProxy';
  static POST_ARTICLE_USECASES_PROXY = 'postArticleUsecasesProxy';
  static DELETE_ARTICLE_USECASES_PROXY = 'deleteArticleUsecasesProxy';
  static PUT_ARTICLE_USECASES_PROXY = 'putArticleUsecasesProxy';

  static register(): DynamicModule {
    return {
      module: UsecasesProxyModule,
      providers: [
        {
          inject: [DatabaseArticleRepository],
          provide: UsecasesProxyModule.GET_ARTICLE_USECASES_PROXY,
          useFactory: (articleRepository: DatabaseArticleRepository) => new UseCaseProxy(new getArticleUseCases(articleRepository)),
        },
        {
          inject: [DatabaseArticleRepository],
          provide: UsecasesProxyModule.GET_ARTICLES_USECASES_PROXY,
          useFactory: (articleRepository: DatabaseArticleRepository) =>
            new UseCaseProxy(new getArticlesUseCases(articleRepository)),
        },
        {
          inject: [LoggerService, DatabaseArticleRepository],
          provide: UsecasesProxyModule.POST_ARTICLE_USECASES_PROXY,
          useFactory: (logger: LoggerService, articleRepository: DatabaseArticleRepository) =>
            new UseCaseProxy(new addArticleUseCases(logger, articleRepository)),
        },
        {
          inject: [LoggerService, DatabaseArticleRepository],
          provide: UsecasesProxyModule.PUT_ARTICLE_USECASES_PROXY,
          useFactory: (logger: LoggerService, articleRepository: DatabaseArticleRepository) =>
            new UseCaseProxy(new updateArticleUseCases(logger, articleRepository)),
        },
        {
          inject: [LoggerService, DatabaseArticleRepository],
          provide: UsecasesProxyModule.DELETE_ARTICLE_USECASES_PROXY,
          useFactory: (logger: LoggerService, articleRepository: DatabaseArticleRepository) =>
            new UseCaseProxy(new deleteArticleUseCases(logger, articleRepository)),
        },
      ],
      exports: [
        UsecasesProxyModule.GET_ARTICLE_USECASES_PROXY,
        UsecasesProxyModule.GET_ARTICLES_USECASES_PROXY,
        UsecasesProxyModule.POST_ARTICLE_USECASES_PROXY,
        UsecasesProxyModule.PUT_ARTICLE_USECASES_PROXY,
        UsecasesProxyModule.DELETE_ARTICLE_USECASES_PROXY,
      ],
    };
  }
}