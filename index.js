const express = require("express");
const server = express();
require("dotenv").config();

const PORT = process.env.PORT || 5000;

server.get("/api", (req, res) => {
  res.json({ message: "i am cool" });
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
