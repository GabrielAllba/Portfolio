var bcrypt = require("bcrypt");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function handler(req, res) {
    switch (req.method) {
        case "POST":
            const { email, password } = req.query;
            var hashpasswords = bcrypt.hashSync(password, 10);
            const admin = await prisma.admin.create({
                data: {
                    email: email,
                    password: hashpasswords,
                },
            });
            res.json(admin)
            break;
        case "GET":
            const admins = await prisma.admin.findMany({
                select: {
                    email: true,
                    password: true,
                },
            });

            res.json(admins);
            break;
  }
}
export default handler;
