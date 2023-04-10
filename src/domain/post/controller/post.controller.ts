import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { PostService } from '../service/post.service';
import { POST_SUCCESS } from 'src/global/result/res-code.result';
import { ResultResponse } from 'src/global/result/response.result';
import { Public } from 'src/global/decorator/public.decorator';
import { Posts } from '../entity/post.entity';
import { PostDto } from '../dto/post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) { }

  @Get('')
  @HttpCode(POST_SUCCESS.status)
  @Public()
  async getPosts(): Promise<ResultResponse> {
    const posts = await this.postService.findAll();

    return new ResultResponse(POST_SUCCESS, posts);
  }

  @Post('/create')
  @Public()
  async createPost(@Body() postDto: PostDto) {
    const createdPost: Posts = await this.postService.save(postDto);
    return new ResultResponse(POST_SUCCESS, createdPost);

  }
}

