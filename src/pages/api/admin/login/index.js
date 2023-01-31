var bcrypt = require("bcrypt");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

import { createJSONToken } from "util/auth";
import { serialize } from "cookie";

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
            const token = createJSONToken(email)

            const serialised = serialize("OursiteJWT", token, {
              httpOnly: true,
              secure: process.env.NODE_ENV !== "development",
              sameSite: "strict",
              maxAge: 60 * 60 * 24 * 30,
              path: "/",
            });

            res.setHeader('Set-Cookie', serialised)

            res.status(200).json({
              status: 200,
              message: "Successfully logged in",
              admin,
              token
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
