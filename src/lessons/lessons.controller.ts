import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonDto } from './dto/lesson.dto';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'generated/prisma/enums';
import { Public } from 'src/auth/decorators/public.decorator';
import { LessonAccessGuard } from './guards/lesson-access.guard';

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

  @Public()
  @UseGuards(LessonAccessGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lessonsService.findOne(id);
  }

  @ApiBody({ type: LessonDto })
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: Partial<LessonDto>) {
    return this.lessonsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lessonsService.remove(id);
  }
}
