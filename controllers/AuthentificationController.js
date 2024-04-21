import prisma from "../config/prisma.js";
import { comparePassword } from "../utils/bcrypt.js";
import { generateToken } from "../utils/jwt.js";

class AuthentificationController {
  async login(req, res) {
    try {
      const body = req.body;

      const user = await prisma.user.findFirst({
        where: {
          email: body.email,
        },
      });

      if (user === null) {
        return res.status(404).send("User not found");
      }

      const isSamePassword = await comparePassword(
        body.password,
        user.password
      );

      if (isSamePassword === false) {
        return res.status(401).send("Invalid password");
      }

      const token = generateToken(user);

      return res.status(200).send({ user, token });
    } catch (e) {
      return res.status(500).send(e.message);
    }
  }
}

export default new AuthentificationController();
