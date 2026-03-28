/*
  Warnings:

  - Added the required column `example_pronunciation` to the `Dictionary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dictionary" ADD COLUMN     "example_pronunciation" TEXT NOT NULL;
