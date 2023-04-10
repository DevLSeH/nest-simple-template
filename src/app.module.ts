import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as redisStore from 'cache-manager-ioredis';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './domain/auth/auth.module';
import { User } from './domain/user/entity/user.entity';
import { UserModule } from './domain/user/user.module';
import { Posts } from './domain/post/entity/post.entity';
import { PostModule } from './domain/post/post.module';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.dev.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'shaan1028!',
      database: 'nodejs',
      entities: [User, Posts],
      synchronize: false, // production에서는 끄기, 데이터가 날아갈 수 있다.
    }),
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: '172.17.57.209',
      port: 6379,
    }),
    UserModule,
    AuthModule,
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
