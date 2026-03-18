import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class DictionaryCategoryDto {
  @ApiProperty({ default: 'Category 1' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
