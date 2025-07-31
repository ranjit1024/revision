-- CreateTable
CREATE TABLE "Revisions" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "session" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Revisions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Revisions_id_key" ON "Revisions"("id");

-- AddForeignKey
ALTER TABLE "Revisions" ADD CONSTRAINT "Revisions_email_fkey" FOREIGN KEY ("email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
