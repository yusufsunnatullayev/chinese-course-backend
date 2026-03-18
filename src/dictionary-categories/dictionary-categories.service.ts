import { Injectable } from '@nestjs/common';
import { DictionaryCategoryDto } from './dto/dictionary-category.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DictionaryCategoriesService {
  constructor(private prismaService: PrismaService) {}

  create(data: DictionaryCategoryDto) {
    return this.prismaService.dictionaryCategory.create({ data });
  }

  findAll() {
    return this.prismaService.dictionaryCategory.findMany();
  }

  findOne(id: string) {
    return this.prismaService.dictionaryCategory.findUnique({ where: { id } });
  }

  update(id: string, data: Partial<DictionaryCategoryDto>) {
    return this.prismaService.dictionaryCategory.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prismaService.dictionaryCategory.delete({ where: { id } });
  }
}
