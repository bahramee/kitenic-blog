"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArticleUseCases = void 0;
class getArticleUseCases {
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
    }
    async execute(id) {
        return await this.articleRepository.findById(id);
    }
}
exports.getArticleUseCases = getArticleUseCases;
//# sourceMappingURL=getArticle.js.map