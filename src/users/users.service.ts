import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { UserDto } from './dto/user.dto';

const SALT_ROUNDS = 10;

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async findOne(id: string) {
    return await this.prismaService.user.findUnique({ where: { id } });
  }

  async createUser(dto: UserDto) {
    const existingUser = await this.prismaService.user.findFirst({
      where: {
        OR: [{ username: dto.username }, { email: dto.email }],
      },
    });

    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(dto.password, SALT_ROUNDS);

    const user = await this.prismaService.user.create({
      data: {
        username: dto.username,
        email: dto.email,
        password: hashedPassword,
        profilePic: '',
        courses_keys: dto.courses_keys || [],
      },
    });

    return {
      id: user.id,
      username: user.username,
      email: user.email,
    };
  }

  async updateUser(id: string, dto: Partial<UserDto>, profilePic: string) {
    return await this.prismaService.user.update({
      where: { id },
      data: {
        ...dto,
        profilePic: profilePic || '',
      },
    });
  }
}
