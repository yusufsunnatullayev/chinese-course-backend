import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/guards/auth.guard';
import { PrismaService } from './prisma.service';
import { LessonsModule } from './lessons/lessons.module';
import { CoursesModule } from './courses/courses.module';
import { RolesGuard } from './auth/guards/roles.guard';
import { CommentsModule } from './comments/comments.module';
import { DictionaryCategoriesModule } from './dictionary-categories/dictionary-categories.module';
import { DictionariesModule } from './dictionaries/dictionaries.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    AuthModule,
    UsersModule,
    LessonsModule,
    CoursesModule,
    CommentsModule,
    DictionaryCategoriesModule,
    DictionariesModule,
  ],
  controllers: [],
  providers: [
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
