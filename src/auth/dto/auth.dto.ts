import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class SignInDto {
  @ApiProperty({ default: 'user' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ default: '123456' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ default: 'mydeviceid' })
  @IsString()
  @IsNotEmpty()
  deviceId: string;
}

export class SignInAdminDto {
  @ApiProperty({ default: 'admin' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ default: 'admin123' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
