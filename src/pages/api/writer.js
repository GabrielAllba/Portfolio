const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();


async function handler(req, res) {
  if (req.method === "POST") {
      console.log('post')
      return
  }else{
    // get
    const writer = await prisma.writer.findMany({
      select: {
        id: true,
        name: true,
        profile_picture: true
      }
    })

    res.json(writer)

  }

  
  
  


}
export default handler;