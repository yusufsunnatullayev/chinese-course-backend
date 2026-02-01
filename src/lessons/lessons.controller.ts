import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonDto } from './dto/lesson.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'generated/prisma/enums';

@Roles(Role.ADMIN)
@ApiBearerAuth('access-token')
@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Post()
  create(@Body() dto: LessonDto) {
    return this.lessonsService.create(dto);
  }

  @Roles(Role.USER)
  @Get()
  findAll() {
    return this.lessonsService.findAll();
  }

  @Roles(Role.USER)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lessonsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: LessonDto) {
    return this.lessonsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lessonsService.remove(id);
  }
}
