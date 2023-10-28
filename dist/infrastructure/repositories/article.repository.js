"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseArticleRepository = void 0;
const common_1 = require("@nestjs/common");
const article_1 = require("../../domain/model/article");
const article_entity_1 = require("../entities/article.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let DatabaseArticleRepository = class DatabaseArticleRepository {
    constructor(articleEntityRepository) {
        this.articleEntityRepository = articleEntityRepository;
    }
    async insert(article) {
        const articleEntity = this.toArticleEntity(article);
        const result = await this.articleEntityRepository.insert(articleEntity);
        return this.toArticle(result.generatedMaps[0]);
    }
    async findAll() {
        const articlesEntity = await this.articleEntityRepository.find();
        return articlesEntity.map((articleEntity) => this.toArticle(articleEntity));
    }
    async findById(id) {
        const articleEntity = await this.articleEntityRepository.findOneBy({ id: id });
        return this.toArticle(articleEntity);
    }
    async update(id, article) {
        const articleEntity = await this.articleEntityRepository.findOneBy({ id: id });
        articleEntity.content = article.content;
        articleEntity.title = article.title;
        await this.articleEntityRepository.save(articleEntity);
    }
    async deleteById(id) {
        await this.articleEntityRepository.delete({ id: id });
    }
    toArticle(articleEntity) {
        const article = new article_1.ArticleM();
        article.id = articleEntity.id;
        article.content = articleEntity.content;
        article.title = articleEntity.title;
        article.createddate = articleEntity.createdate;
        article.updateddate = articleEntity.updateddate;
        return article;
    }
    toArticleEntity(article) {
        const articleEntity = new article_entity_1.Article();
        articleEntity.id = article.id;
        articleEntity.content = article.content;
        articleEntity.title = article.title;
        return articleEntity;
    }
};
exports.DatabaseArticleRepository = DatabaseArticleRepository;
exports.DatabaseArticleRepository = DatabaseArticleRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(article_entity_1.Article)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], DatabaseArticleRepository);
//# sourceMappingURL=article.repository.js.map