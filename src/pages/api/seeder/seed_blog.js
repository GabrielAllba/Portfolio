const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    const writer = await prisma.writer.findUnique({
      where: {
        id: "63d72f97625c2d4ae6377dea",
      },
    });

    const blog = await prisma.blog.createMany({
      data: [
        {
          color: ["#FFA6D6", "#A091FF"],
          content:
            "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice.",
          description:
            "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.",
          publish_date: new Date("2022-07-01"),
          tags: ["Other"],
          title: "Welcome message",
          writerId: writer.id,
        },
        {
          color: ["#FFA6D6", "#A091FF"],
          content:
            "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice.",
          description:
            "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.",
          publish_date: new Date("2022-07-01"),
          tags: ["Laravel 9", "JSON Web Token"],
          title: "Example message",
          writerId: writer.id,
        },
      ],
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
