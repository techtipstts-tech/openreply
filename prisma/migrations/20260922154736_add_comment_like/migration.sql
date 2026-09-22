-- AlterTable
ALTER TABLE "Automation" ADD COLUMN     "likeCommentEnabled" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "DmLog" ADD COLUMN     "commentLikeError" TEXT,
ADD COLUMN     "commentLikedAt" TIMESTAMP(3);
