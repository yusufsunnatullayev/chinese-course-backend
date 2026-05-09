import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseDto } from './dto/course.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from 'generated/prisma/client';

@Injectable()
export class CoursesService {
  constructor(private prismaService: PrismaService) {}

  create(dto: CourseDto) {
    return this.prismaService.course.create({
      data: {
        ...dto,
        pricePlans: dto.pricePlans as unknown as Prisma.InputJsonValue,
      },
    });
  }

  findAll() {
    return this.prismaService.course.findMany({
      include: {
        _count: {
          select: {
            lessons: true,
            dictionaries: true,
          } as any,
        },
      },
    });
  }

  findOne(id: string) {
    return this.prismaService.course.findUnique({
      where: { id },
      include: { lessons: true, comments: true, dictionaries: true },
    });
  }

  async findUserCourses(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
      select: { courses_keys: true },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.prismaService.course.findMany({
      where: {
        id: {
          in: user.courses_keys,
        },
      },
      include: {
        _count: {
          select: {
            lessons: true,
            dictionaries: true,
          },
        },
      },
    });
  }

  update(id: string, dto: Partial<CourseDto>) {
    return this.prismaService.course.update({
      where: { id },
      data: {
        ...dto,
        pricePlans: dto.pricePlans as unknown as Prisma.InputJsonValue,
      },
    });
  }

  remove(id: string) {
    return this.prismaService.course.delete({ where: { id } });
  }
}
