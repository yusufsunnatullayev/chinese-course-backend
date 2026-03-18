import { Injectable } from '@nestjs/common';
import { DictionaryDto } from './dto/dictionary.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DictionariesService {
  constructor(private prismaService: PrismaService) {}

  create(data: DictionaryDto) {
    return this.prismaService.dictionary.create({ data });
  }

  findAll() {
    return this.prismaService.dictionary.findMany();
  }

  findOne(id: string) {
    return this.prismaService.dictionary.findUnique({ where: { id } });
  }

  update(id: string, data: Partial<DictionaryDto>) {
    return this.prismaService.dictionary.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prismaService.dictionary.delete({ where: { id } });
  }
}
