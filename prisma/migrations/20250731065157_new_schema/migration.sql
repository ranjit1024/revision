/*
  Warnings:

  - Added the required column `end` to the `Revisions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Revisions" ADD COLUMN     "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "end" TIMESTAMP(3) NOT NULL;
