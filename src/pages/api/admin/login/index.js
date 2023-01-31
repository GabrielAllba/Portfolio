var bcrypt = require("bcrypt");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function handler(req, res) {
  switch (req.method) {
    case "POST":
      const { email, password } = req.body;
    
      const admin = await prisma.admin.findUnique({
        where: {
          email: email,
        },
      });
      if (admin) {
        bcrypt.compare(password, admin.password, function (err, result) {
          if (result === true) {

            res.status(200).json({
              status: 200,
              message: "Successfully logged in",
              admin,
            });
          } else {
            res.status(401).json({
              status: 401,
              message: "Invalid credentials",
              errors: {
                credentials: "Invalid email or password entered",
              },
            });
          }
        });
      } else {
        res.status(401).json({
          status: 401,
          message: "Invalid credentials",
          errors: {
            credentials: "Invalid email or password",
          },
        });
      }
      break;
  }
}
export default handler;
