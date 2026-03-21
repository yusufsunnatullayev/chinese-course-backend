import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class DictionaryDto {
  @ApiProperty({ default: '' })
  @IsString()
  @IsNotEmpty()
  categoryId: string;

  @ApiProperty({ default: '' })
  @IsString()
  @IsNotEmpty()
  courseId: string;

  @ApiProperty({ default: '' })
  @IsString()
  @IsNotEmpty()
  lessonId: string;

  @ApiProperty({ default: 'olma' })
  @IsString()
  @IsNotEmpty()
  word_uz: string;

  @ApiProperty({ default: 'apple' })
  @IsString()
  @IsNotEmpty()
  word_en: string;

  @ApiProperty({ default: 'aappllee' })
  @IsString()
  @IsNotEmpty()
  word_chinese: string;

  @ApiProperty({ default: "Men olmani yaxshi ko'raman" })
  @IsString()
  @IsNotEmpty()
  example_uz: string;

  @ApiProperty({ default: 'I like apple' })
  @IsString()
  @IsNotEmpty()
  example_en: string;

  @ApiProperty({ default: 'II lliikkee aappllee' })
  @IsString()
  @IsNotEmpty()
  example_chinese: string;

  @ApiProperty({ default: 'I like apple' })
  @IsString()
  @IsNotEmpty()
  pronunciation: string;
}
