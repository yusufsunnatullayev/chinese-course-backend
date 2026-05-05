-- CreateEnum
CREATE TYPE "PlanDuration" AS ENUM ('MONTH_1', 'MONTH_3', 'MONTH_6', 'MONTH_12', 'FOREVER');

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "isPublic" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "pricePlans" JSONB NOT NULL DEFAULT '[]';

-- AlterTable
ALTER TABLE "Lesson" ALTER COLUMN "duration" SET DATA TYPE TEXT;
