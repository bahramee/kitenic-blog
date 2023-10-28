import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigModule } from '../config/typeorm/typeorm.module';
import { Article } from '../entities/article.entity';
import { DatabaseArticleRepository } from './article.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  providers: [DatabaseArticleRepository],
  exports: [DatabaseArticleRepository],
})
export class RepositoriesModule {}
