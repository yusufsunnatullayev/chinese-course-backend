import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentDto } from './dto/comment.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'generated/prisma/enums';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';

@Roles(Role.ADMIN)
@ApiBearerAuth('access-token')
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Roles(Role.USER)
  @Post()
  create(@Body() data: CommentDto) {
    return this.commentsService.create(data);
  }

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(id);
  }

  @ApiBody({ type: CommentDto })
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: CommentDto) {
    return this.commentsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsService.remove(id);
  }
}
