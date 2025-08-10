import express from "express";
import cors from "cors";
import { mongoConnection } from "./src/config/mongoConfig.js";
import { config } from "./src/config/config.js";
import authRouter from "./src/routes/authRouter.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
// Look for a variable named PORT which is set in the encvironment.
const PORT = config.port;
// cors
app.use(cors());

// request body
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: true,
    message: "I AM ALIVE",
  });
});

//api/v1/auth
app.use("/api/v1/auth", authRouter);

// mongo connection
mongoConnection()
  .then(() => {
    app.listen(PORT, (err) => {
      if (err) {
        console.log("SERVER COULD NOT STARTED");
      } else {
        console.log("SERVER STARTED AT PORT: ", PORT);
      }
    });
  })
  .catch((err) => {
    console.log(err.message);
    console.log("MONGO DB CONNECTION ERROR");
  });
