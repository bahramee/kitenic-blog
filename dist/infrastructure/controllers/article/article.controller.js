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
exports.ArticleController = void 0;
const common_1 = require("@nestjs/common");
const usecases_proxy_1 = require("../../usecases-proxy/usecases-proxy");
const usecases_proxy_module_1 = require("../../usecases-proxy/usecases-proxy.module");
const article_dto_1 = require("./article.dto");
const article_presenter_1 = require("./article.presenter");
let ArticleController = class ArticleController {
    constructor(getArticleUsecaseProxy, getAllArticlesUsecaseProxy, updateArticlesUsecaseProxy, deleteArticleUsecaseProxy, addArticleUsecaseProxy) {
        this.getArticleUsecaseProxy = getArticleUsecaseProxy;
        this.getAllArticlesUsecaseProxy = getAllArticlesUsecaseProxy;
        this.updateArticlesUsecaseProxy = updateArticlesUsecaseProxy;
        this.deleteArticleUsecaseProxy = deleteArticleUsecaseProxy;
        this.addArticleUsecaseProxy = addArticleUsecaseProxy;
    }
    async getArticle(id) {
        const article = await this.getArticleUsecaseProxy.getInstance().execute(id);
        return new article_presenter_1.ArticlePresenter(article);
    }
    async getArticles() {
        const articles = await this.getAllArticlesUsecaseProxy.getInstance().execute();
        return articles.map((article) => new article_presenter_1.ArticlePresenter(article));
    }
    async updateArticle(updateArticleDto) {
        const { id, title, content } = updateArticleDto;
        await this.updateArticlesUsecaseProxy.getInstance().execute(id, title, content);
        return 'success';
    }
    async deleteArticle(id) {
        await this.deleteArticleUsecaseProxy.getInstance().execute(id);
        return 'success';
    }
    async addArticle(addArticleDto) {
        const { title, content } = addArticleDto;
        const articleCreated = await this.addArticleUsecaseProxy.getInstance().execute(title, content);
        return new article_presenter_1.ArticlePresenter(articleCreated);
    }
};
exports.ArticleController = ArticleController;
__decorate([
    (0, common_1.Get)('article'),
    __param(0, (0, common_1.Query)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getArticle", null);
__decorate([
    (0, common_1.Get)('articles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getArticles", null);
__decorate([
    (0, common_1.Put)('article'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [article_dto_1.UpdateArticleDto]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "updateArticle", null);
__decorate([
    (0, common_1.Delete)('article'),
    __param(0, (0, common_1.Query)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "deleteArticle", null);
__decorate([
    (0, common_1.Post)('article'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [article_dto_1.AddArticleDto]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "addArticle", null);
exports.ArticleController = ArticleController = __decorate([
    (0, common_1.Controller)('article'),
    __param(0, (0, common_1.Inject)(usecases_proxy_module_1.UsecasesProxyModule.GET_ARTICLE_USECASES_PROXY)),
    __param(1, (0, common_1.Inject)(usecases_proxy_module_1.UsecasesProxyModule.GET_ARTICLES_USECASES_PROXY)),
    __param(2, (0, common_1.Inject)(usecases_proxy_module_1.UsecasesProxyModule.PUT_ARTICLE_USECASES_PROXY)),
    __param(3, (0, common_1.Inject)(usecases_proxy_module_1.UsecasesProxyModule.DELETE_ARTICLE_USECASES_PROXY)),
    __param(4, (0, common_1.Inject)(usecases_proxy_module_1.UsecasesProxyModule.POST_ARTICLE_USECASES_PROXY)),
    __metadata("design:paramtypes", [usecases_proxy_1.UseCaseProxy,
        usecases_proxy_1.UseCaseProxy,
        usecases_proxy_1.UseCaseProxy,
        usecases_proxy_1.UseCaseProxy,
        usecases_proxy_1.UseCaseProxy])
], ArticleController);
//# sourceMappingURL=article.controller.js.map