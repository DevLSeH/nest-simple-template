import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AUTHORITY } from './enum/authority.enum';
import { Post } from 'src/domain/post/entity/enum/post.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: AUTHORITY.ROLE_USER })
  authority: AUTHORITY;

  @OneToMany(()=>Post, (post)=>post.user)
  posts: Post[]

  constructor(name: string, email: string, password: string) {
    this.username = name;
    this.email = email;
    this.password = password;
  }
}
