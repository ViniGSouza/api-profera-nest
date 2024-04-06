/*
  Warnings:

  - You are about to drop the `Aula` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Curso` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Aula" DROP CONSTRAINT "Aula_cursoId_fkey";

-- DropTable
DROP TABLE "Aula";

-- DropTable
DROP TABLE "Curso";

-- CreateTable
CREATE TABLE "Course" (
    "id" VARCHAR(36) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Class" (
    "id" VARCHAR(36) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "videoUrls" TEXT NOT NULL,
    "dataDeLancamento" TIMESTAMP(3) NOT NULL,
    "cursoId" VARCHAR(36) NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
