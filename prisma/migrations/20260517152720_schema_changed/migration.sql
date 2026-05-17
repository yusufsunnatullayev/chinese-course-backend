-- AlterTable
ALTER TABLE "Dictionary" ADD COLUMN     "example_ru" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "word_ru" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "DictionaryCategory" ADD COLUMN     "category_color" TEXT NOT NULL DEFAULT '#000000',
ADD COLUMN     "category_icon" TEXT NOT NULL DEFAULT '';
