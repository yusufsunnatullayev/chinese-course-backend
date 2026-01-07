import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { SignInDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(dto: SignInDto) {
    const { username, password, deviceId } = dto;
    const user = await this.prismaService.user.findUnique({
      where: { username },
      include: { devices: true },
    });

    if (!user) throw new UnauthorizedException();

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new UnauthorizedException();

    // ✅ register device (max 2)
    if (!user.devices.some((d) => d.deviceId === deviceId)) {
      if (user.devices.length >= 2) {
        throw new ForbiddenException('Device limit reached');
      }

      await this.prismaService.device.create({
        data: { userId: user.id, deviceId },
      });
    }

    // 🔴 deactivate existing session
    await this.prismaService.session.updateMany({
      where: {
        userId: user.id,
        isActive: true,
      },
      data: { isActive: false },
    });

    // 🔐 create new session
    const refreshToken = this.jwtService.sign(
      {
        sub: user.id,
        userId: user.id,
        deviceId,
      },
      { expiresIn: '7d' },
    );

    await this.prismaService.session.create({
      data: {
        userId: user.id,
        deviceId,
        refreshToken,
        isActive: true,
      },
    });

    const accessToken = this.jwtService.sign(
      {
        sub: user.id,
        userId: user.id,
        deviceId,
      },
      { expiresIn: '15m' },
    );
    return { accessToken, refreshToken };
  }

  async refresh(refreshToken: string, deviceId: string) {
    const payload = this.jwtService.verify(refreshToken);

    const session = await this.prismaService.session.findFirst({
      where: {
        userId: payload.userId,
        deviceId,
        refreshToken,
        isActive: true,
      },
    });

    if (!session) {
      throw new UnauthorizedException('Session invalid');
    }

    return this.jwtService.sign(
      {
        sub: payload.userId,
        userId: payload.userId,
        deviceId,
      },
      { expiresIn: '15m' },
    );
  }

  async logout(userId: string, deviceId: string) {
    await this.prismaService.session.updateMany({
      where: { userId, deviceId, isActive: true },
      data: { isActive: false },
    });
  }
}
