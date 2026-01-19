import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LessonDto } from './dto/lesson.dto';

@Injectable()
export class LessonsService {
  constructor(private prismaService: PrismaService) {}

  create(dto: LessonDto) {
    return this.prismaService.lesson.create({
      data: dto,
    });
  }

  findAll() {
    return this.prismaService.lesson.findMany();
  }

  findOne(id: string) {
    return this.prismaService.lesson.findUnique({
      where: { id },
    });
  }

  update(id: string, dto: Partial<LessonDto>) {
    return this.prismaService.lesson.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: string) {
    return this.prismaService.lesson.delete({ where: { id } });
  }
}
