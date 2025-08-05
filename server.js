import express from "express";

const app = express();
// Look for a variable named PORT which is set in the encvironment.
const PORT = process.env.PORT || 8000;

//middleware (route-specific)
app.get("/", (req, res) => {
  res.json({
    status: "true",
    message: "It's live",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${PORT}`);
});
