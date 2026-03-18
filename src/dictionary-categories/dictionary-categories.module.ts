import { Module } from '@nestjs/common';
import { DictionaryCategoriesService } from './dictionary-categories.service';
import { DictionaryCategoriesController } from './dictionary-categories.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [DictionaryCategoriesController],
  providers: [DictionaryCategoriesService, PrismaService],
})
export class DictionaryCategoriesModule {}
