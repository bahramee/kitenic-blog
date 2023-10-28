import { Injectable, Module } from '@nestjs/common';
import { ArticleM } from 'src/domain/model/article';
import { ArticleRepository } from 'src/domain/repositories/articleRepository.interface';
import { Article } from '../entities/article.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DatabaseArticleRepository implements ArticleRepository {
    constructor(
        @InjectRepository(Article)
        private readonly articleEntityRepository: Repository<Article>,
    ) { }
    async insert(article: ArticleM): Promise<ArticleM> {
        const articleEntity = this.toArticleEntity(article);
        const result = await this.articleEntityRepository.insert(articleEntity);
        return this.toArticle(result.generatedMaps[0] as Article);
    }
    async findAll(): Promise<ArticleM[]> {
        const articlesEntity = await this.articleEntityRepository.find();
        return articlesEntity.map((articleEntity) => this.toArticle(articleEntity));
    }
    async findById(id: number): Promise<ArticleM> {
        const articleEntity = await this.articleEntityRepository.findOneBy({id: id});
        return this.toArticle(articleEntity);
    }
    async update(id: number, article: ArticleM): Promise<void> {
        const articleEntity = await this.articleEntityRepository.findOneBy({id: id});
        articleEntity.content = article.content;
        articleEntity.title = article.title;
        await this.articleEntityRepository.save(articleEntity);
    }
    async deleteById(id: number): Promise<void> {
        await this.articleEntityRepository.delete({ id: id });
    }

    private toArticle(articleEntity: Article): ArticleM {
        const article: ArticleM = new ArticleM();

        article.id = articleEntity.id;
        article.content = articleEntity.content;
        article.title = articleEntity.title;
        article.createddate = articleEntity.createdate;
        article.updateddate = articleEntity.updateddate;

        return article;
    }

    private toArticleEntity(article: ArticleM): Article {
        const articleEntity: Article = new Article();

        articleEntity.id = article.id;
        articleEntity.content = article.content;
        articleEntity.title = article.title;

        return articleEntity;
    }
}