import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Role } from 'generated/prisma/enums';

export class UserDto {
  @ApiProperty({ default: 'user' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ default: '123456' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ default: 'user@gmail.com' })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ default: [] })
  @IsArray()
  @IsNotEmpty()
  courses_keys: string[];

  @ApiProperty({
    enum: Role,
    isArray: true,
    default: [Role.USER],
  })
  @IsArray()
  @IsEnum(Role, { each: true })
  roles: Role[];
}
