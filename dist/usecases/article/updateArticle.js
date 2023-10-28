"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateArticleUseCases = void 0;
const article_1 = require("../../domain/model/article");
class updateArticleUseCases {
    constructor(logger, articleRepository) {
        this.logger = logger;
        this.articleRepository = articleRepository;
    }
    async execute(id, title, content) {
        const article = new article_1.ArticleM();
        article.content = content;
        article.title = title;
        await this.articleRepository.update(id, article);
        this.logger.log('updateArticleUseCases execute', `Article ${id} have been updated`);
    }
}
exports.updateArticleUseCases = updateArticleUseCases;
//# sourceMappingURL=updateArticle.js.map