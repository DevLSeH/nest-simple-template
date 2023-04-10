import { IsNotEmpty } from 'class-validator';
import { Posts } from '../entity/post.entity';

export class PostDto {

  @IsNotEmpty({ message: '내용을 입력하세요' })
  public postbody: string;

  public isVisible: boolean;

  static async toEntity(postDto: PostDto): Promise<Posts> {
    const { postbody, isVisible } = postDto;
    return new Posts(postbody);
  }
}