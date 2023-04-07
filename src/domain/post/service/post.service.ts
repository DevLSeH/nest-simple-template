import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostNotFoundException } from '../exception/post-not-found.exception';
import { Post } from '../entity/enum/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async findAll(): Promise<Post[]> {
    return await this.postRepository.find();
  }

  async getPostById(id:number) : Promise<Post> {
    const post = await this.postRepository.findOneBy({ postid : id });

    if(!post) {
      throw new PostNotFoundException();
    }

    return post;
  }

  async getPostByUserId(id : number): Promise<Post[]> {
    const post = await this.postRepository.find({
      relations : {
        user : true,
      },
    })

    if(!post){
      throw new PostNotFoundException();
    }

    return post;
  }

  async remove(id : number): Promise<void> {
    await this.postRepository.delete(id);
  }

  // async save(postDto : PostingRequestDto) {
  //   const createdPost : Post = await this.postRepository.save(
  //     await PostingRequestDto.toEntity(postDto),
  //   );
  //   return createdPost;
  // }



}