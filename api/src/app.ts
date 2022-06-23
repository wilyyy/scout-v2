import express from "express";

const app = express();

app.get("/", (req, res) => {
   return res.send("Hello World");
});

app.listen(4000, () => {
   console.log("Application listening at http://localhost:4000");
});
