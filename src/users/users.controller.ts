import {
  Body,
  Controller,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { UserDto } from './dto/user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Public()
  @Post('create')
  createUser(@Body() userDto: UserDto) {
    return this.usersService.createUser(userDto);
  }

  @Patch('update/:id')
  @UseInterceptors(FileInterceptor('profilePic'))
  updateUser(
    @UploadedFile() profilePic: Express.Multer.File,
    @Param('id') id: string,
    @Body() userDto: Partial<UserDto>,
  ) {
    return this.usersService.updateUser(id, userDto, 'profilePic');
  }
}
