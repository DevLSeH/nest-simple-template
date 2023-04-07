import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostService } from './service/post.service';
import { PostController } from './controller/post.controller';
import { Post } from './entity/enum/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [PostService],
  controllers: [PostController],
  exports: [TypeOrmModule, PostService],
})
export class PostModule {}
