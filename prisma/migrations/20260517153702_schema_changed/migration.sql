/*
  Warnings:

  - You are about to drop the column `example_ru` on the `Dictionary` table. All the data in the column will be lost.
  - You are about to drop the column `word_ru` on the `Dictionary` table. All the data in the column will be lost.
  - You are about to drop the column `category_color` on the `DictionaryCategory` table. All the data in the column will be lost.
  - You are about to drop the column `category_icon` on the `DictionaryCategory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Dictionary" DROP COLUMN "example_ru",
DROP COLUMN "word_ru";

-- AlterTable
ALTER TABLE "DictionaryCategory" DROP COLUMN "category_color",
DROP COLUMN "category_icon";
