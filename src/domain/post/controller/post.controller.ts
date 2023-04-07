import { Body, Controller, Get, HttpCode } from '@nestjs/common';
import { PostService } from '../service/post.service';
import { POST_SUCCESS } from 'src/global/result/res-code.result';
import { ResultResponse } from 'src/global/result/response.result';
import { Public } from 'src/global/decorator/public.decorator';

@Controller('post')
export class PostController {
  constructor(private readonly postService : PostService) {}

  @Get('all')
  @HttpCode(POST_SUCCESS.status)
  @Public()
  async getPosts(): Promise<ResultResponse>{
    const posts = await this.postService.findAll();
    
    return new ResultResponse(POST_SUCCESS);
  }
}

