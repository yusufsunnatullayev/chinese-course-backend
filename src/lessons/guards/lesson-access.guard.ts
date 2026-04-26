import {
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Role } from 'generated/prisma/enums';

@Injectable()
export class LessonAccessGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const id = request.params.id;

    if (!id) {
      return true;
    }

    const lesson = await this.prisma.lesson.findUnique({
      where: { id },
    });

    if (!lesson) {
      throw new NotFoundException('Lesson not found');
    }

    // If lesson is public, allow access
    if (lesson.isPublic) {
      return true;
    }

    // If lesson is not public, check if user is authenticated and has roles
    const user = request['user'];

    if (!user) {
      throw new UnauthorizedException('Authentication required for this lesson');
    }

    // Admin can access everything
    if (user.roles?.includes(Role.ADMIN)) {
      return true;
    }

    // If it's a private lesson, user needs Role.USER
    if (user.roles?.includes(Role.USER)) {
      return true;
    }

    throw new ForbiddenException('You do not have permission to access this lesson');
  }
}
