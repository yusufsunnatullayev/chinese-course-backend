import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CourseDto {
  @ApiProperty({ default: 'Lesson Title 1' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ default: 'Teacher' })
  @IsString()
  @IsNotEmpty()
  author: string;

  @ApiProperty({ default: 100000 })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({ default: 'image url' })
  @IsString()
  @IsNotEmpty()
  image: string;

  @ApiProperty({
    default:
      'Learn essential Chinese step by step in this lesson—clear explanations, practical vocabulary, and simple examples to help you start speaking with confidence. 🇨🇳',
  })
  @IsString()
  @IsNotEmpty()
  description: string;
}
