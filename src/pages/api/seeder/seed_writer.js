
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const writer = await prisma.writer.create({
    data: {
      name: "Gabriel Allba",
      profile_picture: "this is url"
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
