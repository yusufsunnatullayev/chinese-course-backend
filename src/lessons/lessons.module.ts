import { Module } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonsController } from './lessons.controller';
import { PrismaService } from 'src/prisma.service';
import { LessonAccessGuard } from './guards/lesson-access.guard';

@Module({
  controllers: [LessonsController],
  providers: [LessonsService, PrismaService, LessonAccessGuard],
})
export class LessonsModule {}
