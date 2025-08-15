/*
  Warnings:

  - Added the required column `brif` to the `Revisions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Revisions" ADD COLUMN     "brif" TEXT NOT NULL;
