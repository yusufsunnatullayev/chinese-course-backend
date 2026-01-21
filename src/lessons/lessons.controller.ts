import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonDto } from './dto/lesson.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @ApiBearerAuth('access-token')
  @Post()
  create(@Body() dto: LessonDto) {
    return this.lessonsService.create(dto);
  }

  @ApiBearerAuth('access-token')
  @Get()
  findAll() {
    return this.lessonsService.findAll();
  }

  @ApiBearerAuth('access-token')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lessonsService.findOne(id);
  }

  @ApiBearerAuth('access-token')
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: Partial<LessonDto>) {
    return this.lessonsService.update(id, dto);
  }

  @ApiBearerAuth('access-token')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lessonsService.remove(id);
  }
}
