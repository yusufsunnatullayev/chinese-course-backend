import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class LessonDto {
  @ApiProperty({ default: 'Lesson Title 1' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    default:
      'File tabs have been enhanced to make split views effortless, with support throughout the interface and built-in commands.',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ default: 'Beginner' })
  @IsString()
  @IsNotEmpty()
  level: string;

  @ApiProperty({ default: 12 })
  @IsNumber()
  @IsNotEmpty()
  duration: number;

  @ApiProperty({ default: ['hello', 'world'] })
  @IsArray()
  @IsNotEmpty()
  words: string[];

  @ApiProperty({ default: false })
  @IsBoolean()
  @IsNotEmpty()
  isPublic: boolean;

  @ApiProperty({
    default:
      'https://www.google.com/search?newwindow=1&sa=X&sca_esv=35e5eccfaf2e56f5&sxsrf=ANbL-n6q8KpR7-AZ7HiKddvbp2yBOo7KdA:1769943193130&udm=7&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3vWUtYx0DZdicpfE1faGYenqWn-q4MFiFFtvJjTKeAVxPSyiDKM_iLDgopBC8StFll-J3cWP_3HUu7LsdLCRcasqNtXHzss5T7xu_tpjlVu0r5bDbNRPau3HIvNI6D9ODZmHBGBuOm1Wvu42xBmFqouhNZmE&q=hsk+1+book&ved=2ahUKEwiNhbKakLiSAxV9FRAIHdhSDfMQtKgLegQIDxAB&biw=1536&bih=714&dpr=1.25&aic=0#fpstate=ive&vld=cid:e3fd4d80,vid:oZj1oD0bw0I,st:0',
  })
  @IsString()
  @IsNotEmpty()
  video: string;

  @ApiProperty({ default: 'courseId123' })
  @IsString()
  @IsNotEmpty()
  courseId: string;
}
