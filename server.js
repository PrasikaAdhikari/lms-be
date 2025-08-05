import express from "express";
import cors from "cors";
import mongoConnection from "./src/config/mongoConfig.js";

const app = express();
// Look for a variable named PORT which is set in the encvironment.
const PORT = process.env.PORT || 8000;
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

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${PORT}`);
});
