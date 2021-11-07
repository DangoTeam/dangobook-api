/*
  Warnings:

  - You are about to drop the column `id` on the `users` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "userUsername" TEXT NOT NULL,
    CONSTRAINT "posts_userUsername_fkey" FOREIGN KEY ("userUsername") REFERENCES "users" ("username") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "username" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "bio" TEXT
);
INSERT INTO "new_users" ("name", "password", "username") SELECT "name", "password", "username" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
