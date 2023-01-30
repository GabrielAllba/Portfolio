const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function handler(req, res) {

  switch(req.method){
    case 'POST':
      console.log("post");
      break;
    case 'GET':
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
      break;
  }
  
}
export default handler;
