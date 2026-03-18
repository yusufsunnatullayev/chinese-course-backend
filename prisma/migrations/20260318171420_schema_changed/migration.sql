-- CreateTable
CREATE TABLE "DictionaryCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DictionaryCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dictionary" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "lessonId" TEXT NOT NULL,
    "word_uz" TEXT NOT NULL,
    "word_en" TEXT NOT NULL,
    "word_chinese" TEXT NOT NULL,
    "example_uz" TEXT NOT NULL,
    "example_en" TEXT NOT NULL,
    "example_chinese" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dictionary_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Dictionary" ADD CONSTRAINT "Dictionary_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dictionary" ADD CONSTRAINT "Dictionary_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
