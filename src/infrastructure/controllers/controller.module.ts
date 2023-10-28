import { Module } from '@nestjs/common';
import { UsecasesProxyModule } from '../usecases-proxy/usecases-proxy.module';
import { ArticleController } from './article/article.controller';

@Module({
  imports: [UsecasesProxyModule.register()],
  controllers: [ArticleController],
})
export class ControllersModule {}
