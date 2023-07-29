import express from "express";
import { json } from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

console.log("hello");

const app = express();
app.use(json());
app.use(cors());

app.get("/api", (req, res) => {
  res.json({
    message: "hello world",
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
