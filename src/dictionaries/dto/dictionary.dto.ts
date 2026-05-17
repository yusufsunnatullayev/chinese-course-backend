import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class DictionaryDto {
  @ApiProperty({ default: '' })
  @IsString()
  @IsNotEmpty()
  categoryId: string;

  @IsOptional()
  @ApiProperty({ default: '' })
  @IsString()
  courseId: string;

  @IsOptional()
  @ApiProperty({ default: '' })
  @IsString()
  lessonId: string;

  @ApiProperty({ default: 'olma' })
  @IsString()
  @IsNotEmpty()
  word_uz: string;

  @ApiProperty({ default: 'яблоки' })
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

  @ApiProperty({ default: 'I like apple' })
  @IsString()
  @IsNotEmpty()
  example_pronunciation: string;
}
