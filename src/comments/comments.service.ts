import { Injectable } from '@nestjs/common';
import { CommentDto } from './dto/comment.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private prismaService: PrismaService) {}

  create(data: CommentDto) {
    return this.prismaService.comment.create({
      data,
    });
  }

  findAll() {
    return this.prismaService.comment.findMany();
  }

  findOne(id: string) {
    return this.prismaService.comment.findUnique({ where: { id } });
  }

  update(id: string, data: Partial<CommentDto>) {
    return this.prismaService.comment.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prismaService.comment.delete({ where: { id } });
  }
}
