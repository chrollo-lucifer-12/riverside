/*
  Warnings:

  - You are about to drop the column `download_url` on the `Media` table. All the data in the column will be lost.
  - You are about to drop the column `preview_url` on the `Media` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Media` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Media" DROP COLUMN "download_url",
DROP COLUMN "preview_url",
DROP COLUMN "title";

-- CreateTable
CREATE TABLE "Metadata" (
    "id" TEXT NOT NULL,
    "mediaId" TEXT NOT NULL,
    "filename" TEXT,
    "duration" DECIMAL(65,30),
    "preview_url" TEXT,
    "full_url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Metadata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VideoAssets" (
    "id" TEXT NOT NULL,
    "type" "MediaType" NOT NULL,
    "url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "mediaId" TEXT NOT NULL,

    CONSTRAINT "VideoAssets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Metadata_mediaId_key" ON "Metadata"("mediaId");

-- AddForeignKey
ALTER TABLE "Metadata" ADD CONSTRAINT "Metadata_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoAssets" ADD CONSTRAINT "VideoAssets_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
