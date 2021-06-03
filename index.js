const express = require("express");
const server = express();
require("dotenv").config();
const cors = require("cors");
const path = require("path");

server.use(express.json());
server.use(cors());
server.use(express.static(path.join(__dirname, "client/build")));

const PORT = process.env.PORT || 5000;

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

server.get("/api", (req, res) => {
  res.json({ message: "i am cool" });
});

server.use((req, res) => {
  res.status(404).json({ message: "cant find anything" });
});
server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
