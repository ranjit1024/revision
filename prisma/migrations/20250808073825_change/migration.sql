/*
  Warnings:

  - You are about to drop the column `created` on the `Revisions` table. All the data in the column will be lost.
  - You are about to drop the column `end` on the `Revisions` table. All the data in the column will be lost.
  - Added the required column `endSession` to the `Revisions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Revisions" DROP COLUMN "created",
DROP COLUMN "end",
ADD COLUMN     "createdSession" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "endSession" TIMESTAMP(3) NOT NULL;
