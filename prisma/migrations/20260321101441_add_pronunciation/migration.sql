/*
  Warnings:

  - Added the required column `pronunciation` to the `Dictionary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dictionary" ADD COLUMN     "pronunciation" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "DictionaryCategory" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;
