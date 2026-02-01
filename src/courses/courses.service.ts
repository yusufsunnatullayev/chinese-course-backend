import { Injectable } from '@nestjs/common';
import { CourseDto } from './dto/course.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CoursesService {
  constructor(private prismaService: PrismaService) {}

  create(dto: CourseDto) {
    return this.prismaService.course.create({
      data: dto,
    });
  }

  findAll() {
    return this.prismaService.course.findMany();
  }

  findOne(id: string) {
    return this.prismaService.course.findUnique({
      where: { id },
      include: { lessons: true },
    });
  }

  update(id: string, dto: Partial<CourseDto>) {
    return this.prismaService.course.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: string) {
    return this.prismaService.course.delete({ where: { id } });
  }
}
