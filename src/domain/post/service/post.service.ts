import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostNotFoundException } from '../exception/post-not-found.exception';
import { Posts } from '../entity/post.entity';
import { Repository } from 'typeorm';
import { PostDto } from '../dto/post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Posts)
    private postRepository: Repository<Posts>,
  ) { }

  async findAll(): Promise<Posts[]> {
    return await this.postRepository.find();
  }

  async getPostById(id: number): Promise<Posts> {
    const post = await this.postRepository.findOneBy({ postid: id });

    if (!post) {
      throw new PostNotFoundException();
    }

    return post;
  }

  async getPostByUserId(id: number): Promise<Posts[]> {
    const post = await this.postRepository.find({
      relations: {
        user: true,
      },
    })

    if (!post) {
      throw new PostNotFoundException();
    }

    return post;
  }

  async remove(id: number): Promise<void> {
    await this.postRepository.delete(id);
  }

  async save(postDto: PostDto) {
    const createdPost = await this.postRepository.save(
      await PostDto.toEntity(postDto)
    );
    return createdPost;
  }



}