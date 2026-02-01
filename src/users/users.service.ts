import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { UserDto } from './dto/user.dto';
import { Role } from 'generated/prisma/enums';

const SALT_ROUNDS = 10;

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return await this.prismaService.user.findMany();
  }

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
        courses_keys: dto.courses_keys || [],
        roles: dto.roles ?? [Role.USER],
      },
    });

    return {
      id: user.id,
      username: user.username,
      email: user.email,
    };
  }

  async updateUser(id: string, dto: UserDto) {
    const data: any = {
      username: dto.username,
      email: dto.email,
      courses_keys: dto.courses_keys,
      roles: dto.roles,
    };

    if (dto.password) {
      data.password = await bcrypt.hash(dto.password, SALT_ROUNDS);
    }

    return this.prismaService.user.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return await this.prismaService.user.delete({ where: { id } });
  }
}
