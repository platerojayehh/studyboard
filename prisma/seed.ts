import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({ url: "file:./dev.db" });
const prisma = new PrismaClient({ adapter });


async function main() {
  // Clear existing data so this script can be re-run safely.
  await prisma.task.deleteMany();
  await prisma.group.deleteMany();

  await prisma.group.create({
    data: {
      name: "Data Structures Study Circle",
      subject: "Computer Science",
      memberCount: 5,
      tasks: {
        create: [
          { title: "Review binary trees", done: false },
          { title: "Practice linked list problems", done: true },
          { title: "Summarize Big-O notation", done: false },
        ],
      },
    },
  });

  await prisma.group.create({
    data: {
      name: "Thermodynamics Crew",
      subject: "Physics",
      memberCount: 3,
      tasks: {
        create: [
          { title: "Solve entropy problem set", done: false },
          { title: "Read Chapter 4", done: false },
        ],
      },
    },
  });

  await prisma.group.create({
    data: {
      name: "Philippine History Readers",
      subject: "History",
      memberCount: 8,
      tasks: {
        create: [
          { title: "Outline Chapter 2 discussion", done: true },
          { title: "Prepare debate points", done: false },
          { title: "Watch assigned documentary", done: true },
        ],
      },
    },
  });

  console.log("Seed data created.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });