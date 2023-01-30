const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function handler(req, res) {
  if (req.method === "POST") {
    console.log("post");
    return;
  } else {
    // get
    const blog = await prisma.blog.findMany({
      select: {
        id: true,
        color: true,
        content: true,
        description: true,
        publish_date: true,
        tags: true,
        title: true,
        writerId: true,
      },
    });

    res.json(blog);
  }
}
export default handler;
