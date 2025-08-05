import mongoose from "mongoose";
import { config } from "./config.js";

export const mongoConnection = () => {
  return mongoose.connect(config.mongoOptions.url);
};
