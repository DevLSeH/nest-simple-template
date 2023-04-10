import { User } from 'src/domain/user/entity/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Posts {
  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @PrimaryGeneratedColumn()
  postid: number;

  @Column()
  isVisible: boolean;

  @Column()
  postbody: string;

  constructor(postbody: string) {
    this.postbody = postbody;
    this.isVisible = true;
  }

}