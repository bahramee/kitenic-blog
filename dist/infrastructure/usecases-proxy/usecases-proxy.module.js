"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UsecasesProxyModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsecasesProxyModule = void 0;
const common_1 = require("@nestjs/common");
const addArticle_1 = require("../../usecases/article/addArticle");
const deleteArticle_1 = require("../../usecases/article/deleteArticle");
const getArticle_1 = require("../../usecases/article/getArticle");
const getArticles_1 = require("../../usecases/article/getArticles");
const updateArticle_1 = require("../../usecases/article/updateArticle");
const exceptions_module_1 = require("../exceptions/exceptions.module");
const logger_module_1 = require("../logger/logger.module");
const logger_service_1 = require("../logger/logger.service");
const article_repository_1 = require("../repositories/article.repository");
const repositories_module_1 = require("../repositories/repositories.module");
const usecases_proxy_1 = require("./usecases-proxy");
let UsecasesProxyModule = UsecasesProxyModule_1 = class UsecasesProxyModule {
    static register() {
        return {
            module: UsecasesProxyModule_1,
            providers: [
                {
                    inject: [article_repository_1.DatabaseArticleRepository],
                    provide: UsecasesProxyModule_1.GET_ARTICLE_USECASES_PROXY,
                    useFactory: (articleRepository) => new usecases_proxy_1.UseCaseProxy(new getArticle_1.getArticleUseCases(articleRepository)),
                },
                {
                    inject: [article_repository_1.DatabaseArticleRepository],
                    provide: UsecasesProxyModule_1.GET_ARTICLES_USECASES_PROXY,
                    useFactory: (articleRepository) => new usecases_proxy_1.UseCaseProxy(new getArticles_1.getArticlesUseCases(articleRepository)),
                },
                {
                    inject: [logger_service_1.LoggerService, article_repository_1.DatabaseArticleRepository],
                    provide: UsecasesProxyModule_1.POST_ARTICLE_USECASES_PROXY,
                    useFactory: (logger, articleRepository) => new usecases_proxy_1.UseCaseProxy(new addArticle_1.addArticleUseCases(logger, articleRepository)),
                },
                {
                    inject: [logger_service_1.LoggerService, article_repository_1.DatabaseArticleRepository],
                    provide: UsecasesProxyModule_1.PUT_ARTICLE_USECASES_PROXY,
                    useFactory: (logger, articleRepository) => new usecases_proxy_1.UseCaseProxy(new updateArticle_1.updateArticleUseCases(logger, articleRepository)),
                },
                {
                    inject: [logger_service_1.LoggerService, article_repository_1.DatabaseArticleRepository],
                    provide: UsecasesProxyModule_1.DELETE_ARTICLE_USECASES_PROXY,
                    useFactory: (logger, articleRepository) => new usecases_proxy_1.UseCaseProxy(new deleteArticle_1.deleteArticleUseCases(logger, articleRepository)),
                },
            ],
            exports: [
                UsecasesProxyModule_1.GET_ARTICLE_USECASES_PROXY,
                UsecasesProxyModule_1.GET_ARTICLES_USECASES_PROXY,
                UsecasesProxyModule_1.POST_ARTICLE_USECASES_PROXY,
                UsecasesProxyModule_1.PUT_ARTICLE_USECASES_PROXY,
                UsecasesProxyModule_1.DELETE_ARTICLE_USECASES_PROXY,
            ],
        };
    }
};
exports.UsecasesProxyModule = UsecasesProxyModule;
UsecasesProxyModule.GET_ARTICLE_USECASES_PROXY = 'getArticleUsecasesProxy';
UsecasesProxyModule.GET_ARTICLES_USECASES_PROXY = 'getArticlesUsecasesProxy';
UsecasesProxyModule.POST_ARTICLE_USECASES_PROXY = 'postArticleUsecasesProxy';
UsecasesProxyModule.DELETE_ARTICLE_USECASES_PROXY = 'deleteArticleUsecasesProxy';
UsecasesProxyModule.PUT_ARTICLE_USECASES_PROXY = 'putArticleUsecasesProxy';
exports.UsecasesProxyModule = UsecasesProxyModule = UsecasesProxyModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [logger_module_1.LoggerModule, repositories_module_1.RepositoriesModule, exceptions_module_1.ExceptionsModule],
    })
], UsecasesProxyModule);
//# sourceMappingURL=usecases-proxy.module.js.map