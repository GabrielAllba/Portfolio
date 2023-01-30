const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function handler(req, res) {
    const {blogId} = req.query
    switch(req.method){
        case 'POST':
            console.log("post");
            break;
        case 'GET':
            const blog = await prisma.blog.findUnique({
              where: {
                id: blogId,
              },
            });

            res.json(blog);
            break;
    }
  
}
export default handler;
