-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "image" TEXT,
    "emailVerified" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Revisions" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "sessionsintervel" INTEGER[],
    "sessions" INTEGER NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "createdSession" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endSession" TIMESTAMP(3) NOT NULL,
    "totalDays" INTEGER NOT NULL,

    CONSTRAINT "Revisions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Revisions_id_key" ON "Revisions"("id");

-- AddForeignKey
ALTER TABLE "Revisions" ADD CONSTRAINT "Revisions_email_fkey" FOREIGN KEY ("email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
