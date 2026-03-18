/*
  Warnings:

  - Added the required column `categoryId` to the `Dictionary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dictionary" ADD COLUMN     "categoryId" TEXT NOT NULL;
