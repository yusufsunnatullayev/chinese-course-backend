import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CourseDto } from './dto/course.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @ApiBearerAuth('access-token')
  @Post()
  create(@Body() dto: CourseDto) {
    return this.coursesService.create(dto);
  }

  @ApiBearerAuth('access-token')
  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @ApiBearerAuth('access-token')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @ApiBearerAuth('access-token')
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: CourseDto) {
    return this.coursesService.update(id, dto);
  }

  @ApiBearerAuth('access-token')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}
