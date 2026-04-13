-- DropForeignKey
ALTER TABLE "Dictionary" DROP CONSTRAINT "Dictionary_courseId_fkey";

-- DropForeignKey
ALTER TABLE "Dictionary" DROP CONSTRAINT "Dictionary_lessonId_fkey";

-- AlterTable
ALTER TABLE "Dictionary" ALTER COLUMN "courseId" DROP NOT NULL,
ALTER COLUMN "lessonId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Dictionary" ADD CONSTRAINT "Dictionary_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dictionary" ADD CONSTRAINT "Dictionary_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE SET NULL ON UPDATE CASCADE;
