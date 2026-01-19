import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LessonDto {
  @ApiProperty({ default: 'Lesson Title 1' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ default: 'http://example.com/video.mp4' })
  @IsString()
  @IsNotEmpty()
  video: string;

  @ApiProperty({ default: 'courseId123' })
  @IsString()
  @IsNotEmpty()
  courseId: string;
}
