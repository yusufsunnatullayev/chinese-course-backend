import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CourseDto {
  @ApiProperty({ default: 'HSK book 1' })
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

  @ApiProperty({
    default:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhklhJiHnTSk2Vmr8TV8DVDL2ykWhYySDDyXLzBgvc9n0k3EnPhyphenhyphen17_iPWMNSvK_cuENT_212lCTJu29IvmU1KC0tRIYL35bh1KfE5r3x1tkcFzY2K9F0xKjY_Z0BVOla4FzmljLeA3BK4/s1748/0001-9316600135_20211005_132636_0000.png',
  })
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
