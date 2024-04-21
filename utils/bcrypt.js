import bcrypt from "bcrypt";
const saltRounds = 10;

export const hashPassword = (password) => {
  return bcrypt.hash(password, saltRounds);
};

export const comparePassword = (password, hash) => {
  return bcrypt.compare(password, hash);
};
