"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addArticleUseCases = void 0;
const article_1 = require("../../domain/model/article");
class addArticleUseCases {
    constructor(logger, articleRepository) {
        this.logger = logger;
        this.articleRepository = articleRepository;
    }
    async execute(title, content) {
        const article = new article_1.ArticleM();
        article.title = title;
        article.content = content;
        const result = await this.articleRepository.insert(article);
        this.logger.log('addArticle execute', 'New article have been inserted');
        return result;
    }
}
exports.addArticleUseCases = addArticleUseCases;
//# sourceMappingURL=addArticle.js.map