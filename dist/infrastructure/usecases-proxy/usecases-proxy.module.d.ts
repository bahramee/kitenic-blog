import { DynamicModule } from '@nestjs/common';
export declare class UsecasesProxyModule {
    static GET_ARTICLE_USECASES_PROXY: string;
    static GET_ARTICLES_USECASES_PROXY: string;
    static POST_ARTICLE_USECASES_PROXY: string;
    static DELETE_ARTICLE_USECASES_PROXY: string;
    static PUT_ARTICLE_USECASES_PROXY: string;
    static register(): DynamicModule;
}
