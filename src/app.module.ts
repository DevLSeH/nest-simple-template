import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './domain/auth/auth.module';
import { User } from './domain/user/entity/user.entity';
import { UserModule } from './domain/user/user.module';
import { Post } from './domain/post/entity/enum/post.entity';
import { PostModule } from './domain/post/post.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'shaan1028!',
      database: 'nodejs',
      entities: [User, Post],
      synchronize: true, // production에서는 끄기, 데이터가 날아갈 수 있다.
    }),
    UserModule,
    AuthModule,
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
