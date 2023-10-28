"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteArticleUseCases = void 0;
class deleteArticleUseCases {
    constructor(logger, articleRepository) {
        this.logger = logger;
        this.articleRepository = articleRepository;
    }
    async execute(id) {
        await this.articleRepository.deleteById(id);
        this.logger.log('deleteArticleUseCases execute', `Article ${id} have been deleted`);
    }
}
exports.deleteArticleUseCases = deleteArticleUseCases;
//# sourceMappingURL=deleteArticle.js.map