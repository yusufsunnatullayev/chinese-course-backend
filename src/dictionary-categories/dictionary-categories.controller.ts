import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DictionaryCategoriesService } from './dictionary-categories.service';
import { DictionaryCategoryDto } from './dto/dictionary-category.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { Role } from 'generated/prisma/enums';

@Roles(Role.ADMIN)
@ApiBearerAuth('access-token')
@Controller('dictionary-categories')
export class DictionaryCategoriesController {
  constructor(
    private readonly dictionaryCategoriesService: DictionaryCategoriesService,
  ) {}

  @Post()
  create(@Body() data: DictionaryCategoryDto) {
    return this.dictionaryCategoriesService.create(data);
  }

  @Roles(Role.USER)
  @Get()
  findAll() {
    return this.dictionaryCategoriesService.findAll();
  }

  @Roles(Role.USER)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dictionaryCategoriesService.findOne(id);
  }

  @ApiBody({ type: DictionaryCategoryDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data: Partial<DictionaryCategoryDto>,
  ) {
    return this.dictionaryCategoriesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dictionaryCategoriesService.remove(id);
  }
}
