import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { PrismaService } from 'src/prisma.service';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractTokenFromHeader(request);

    if (token) {
      try {
        const payload = await this.jwtService.verifyAsync(token, {
          secret: 'yusuffdeveloper_jwt_secret',
        });

        const { sub: userId, deviceId } = payload;

        if (userId && deviceId) {
          const session = await this.prisma.session.findUnique({
            where: {
              userId_deviceId: {
                userId,
                deviceId,
              },
            },
          });

          if (session && session.isActive) {
            request['user'] = payload;
          }
        }
      } catch (e) {
        if (!isPublic) {
          throw new UnauthorizedException('Invalid token');
        }
      }
    }

    if (isPublic) {
      return true;
    }

    if (!request['user']) {
      throw new UnauthorizedException('No token provided or session expired');
    }

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
