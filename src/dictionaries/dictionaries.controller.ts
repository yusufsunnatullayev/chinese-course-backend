import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DictionariesService } from './dictionaries.service';
import { DictionaryDto } from './dto/dictionary.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { Role } from 'generated/prisma/enums';
import { Public } from 'src/auth/decorators/public.decorator';

@Roles(Role.ADMIN)
@ApiBearerAuth('access-token')
@Controller('dictionaries')
export class DictionariesController {
  constructor(private readonly dictionariesService: DictionariesService) {}

  @Post()
  create(@Body() data: DictionaryDto) {
    return this.dictionariesService.create(data);
  }

  @Public()
  @Get()
  findAll() {
    return this.dictionariesService.findAll();
  }

  @Roles(Role.USER)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dictionariesService.findOne(id);
  }

  @ApiBody({ type: DictionaryDto })
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Partial<DictionaryDto>) {
    return this.dictionariesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dictionariesService.remove(id);
  }
}
