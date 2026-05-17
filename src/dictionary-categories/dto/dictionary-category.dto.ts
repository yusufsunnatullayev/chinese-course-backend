import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class DictionaryCategoryDto {
  @ApiProperty({ default: 'Category 1' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ default: '#333' })
  @IsString()
  @IsNotEmpty()
  category_color: string;

  @ApiProperty({ default: 'book' })
  @IsString()
  @IsNotEmpty()
  category_icon: string;

  @ApiProperty({ default: true })
  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
}
