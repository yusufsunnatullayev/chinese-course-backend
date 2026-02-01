import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { UserDto } from './dto/user.dto';
import { Public } from 'src/auth/decorators/public.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'generated/prisma/enums';
@Roles(Role.ADMIN)
@ApiBearerAuth('access-token')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.findAll();
  }

  @Post('create')
  createUser(@Body() userDto: UserDto) {
    return this.usersService.createUser(userDto);
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Put('update/:id')
  updateUser(@Param('id') id: string, @Body() userDto: UserDto) {
    return this.usersService.updateUser(id, userDto);
  }

  @Delete(':id')
  deleteUserById(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
