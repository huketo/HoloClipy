import express from "express";

const app = express();

const PORT = 4000;

app.get("/", (req, res, next) => {
  res.send(`<h1>This is Home Page 🏠</h1>`)
});

const handleLinsting = () =>
  console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);

app.listen(4000, handleLinsting);