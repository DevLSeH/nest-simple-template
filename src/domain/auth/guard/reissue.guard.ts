import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class ReissueAuthGuard extends AuthGuard('reissue') {
  constructor(private readonly reflector: Reflector) {
    super();
  }

  // For excluding guard to @IsPublic decorator
  // canActivate(context: ExecutionContext) {
  //   const isPublic = this.reflector.get<boolean>(
  //     'isPublic',
  //     context.getHandler(),
  //   );

  //   if (isPublic) {
  //     return true;
  //   }

  //   return super.canActivate(context);
  // }
}
