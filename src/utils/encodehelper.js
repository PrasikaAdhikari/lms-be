export const encryptFunction = (plaintext) => {
  let salt = bcrypt.genSaltSync(parseInt(process.env.SALT) || 10);
};
