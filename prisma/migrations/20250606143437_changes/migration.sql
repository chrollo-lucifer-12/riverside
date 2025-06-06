/*
  Warnings:

  - You are about to drop the column `url` on the `Media` table. All the data in the column will be lost.
  - Added the required column `download_url` to the `Media` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preview_url` to the `Media` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Media` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Media" DROP COLUMN "url",
ADD COLUMN     "download_url" TEXT NOT NULL,
ADD COLUMN     "preview_url" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
