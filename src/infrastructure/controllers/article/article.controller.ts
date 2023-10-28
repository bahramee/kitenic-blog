
import { Body, Controller, Delete, Get, Inject, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { UseCaseProxy } from '../../usecases-proxy/usecases-proxy';
import { UsecasesProxyModule } from '../../usecases-proxy/usecases-proxy.module';
import { getArticleUseCases } from 'src/usecases/article/getArticle';
import { getArticlesUseCases } from 'src/usecases/article/getArticles';
import { updateArticleUseCases } from 'src/usecases/article/updateArticle';
import { deleteArticleUseCases } from 'src/usecases/article/deleteArticle';
import { addArticleUseCases } from 'src/usecases/article/addArticle';
import { AddArticleDto, UpdateArticleDto } from './article.dto';
import { ArticlePresenter } from './article.presenter';

@Controller('article')
export class ArticleController {
  constructor(
    @Inject(UsecasesProxyModule.GET_ARTICLE_USECASES_PROXY)
    private readonly getArticleUsecaseProxy: UseCaseProxy<getArticleUseCases>,
    @Inject(UsecasesProxyModule.GET_ARTICLES_USECASES_PROXY)
    private readonly getAllArticlesUsecaseProxy: UseCaseProxy<getArticlesUseCases>,
    @Inject(UsecasesProxyModule.PUT_ARTICLE_USECASES_PROXY)
    private readonly updateArticlesUsecaseProxy: UseCaseProxy<updateArticleUseCases>,
    @Inject(UsecasesProxyModule.DELETE_ARTICLE_USECASES_PROXY)
    private readonly deleteArticleUsecaseProxy: UseCaseProxy<deleteArticleUseCases>,
    @Inject(UsecasesProxyModule.POST_ARTICLE_USECASES_PROXY)
    private readonly addArticleUsecaseProxy: UseCaseProxy<addArticleUseCases>,
  ) {}

  @Get('article')
  async getArticle(@Query('id', ParseIntPipe) id: number) {
    const article = await this.getArticleUsecaseProxy.getInstance().execute(id);
    return new ArticlePresenter(article);
  }

  @Get('articles')
  async getArticles() {
    const articles = await this.getAllArticlesUsecaseProxy.getInstance().execute();
    return articles.map((article) => new ArticlePresenter(article));
  }

  @Put('article')
  async updateArticle(@Body() updateArticleDto: UpdateArticleDto) {
    const { id, title, content } = updateArticleDto;
    await this.updateArticlesUsecaseProxy.getInstance().execute(id, title, content);
    return 'success';
  }

  @Delete('article')
  async deleteArticle(@Query('id', ParseIntPipe) id: number) {
    await this.deleteArticleUsecaseProxy.getInstance().execute(id);
    return 'success';
  }

  @Post('article')
  async addArticle(@Body() addArticleDto: AddArticleDto) {
    const { title, content } = addArticleDto;
    const articleCreated = await this.addArticleUsecaseProxy.getInstance().execute(title, content);
    return new ArticlePresenter(articleCreated);
  }
}