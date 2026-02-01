/*
  Warnings:

  - You are about to drop the column `profilePic` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "profilePic",
ADD COLUMN     "roles" TEXT[];

-- DropTable
DROP TABLE "Admin";
