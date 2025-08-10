export const config = {
  port: process.env.PORT || 8000,
  mongoOptions: {
    url: process.env.MONGO_URL || "mongodb://localhost:27017/lms-db",
  },
  jwt: {
    secret: process.env.JWT_SECRET || "secret",

    expiresIn: process.environment || "7d",
  },
};
