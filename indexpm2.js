// Im a child, Im going to act like a server
// and do nothing else
const express = require("express");
const crypto = require("crypto");
const app = express();

// function doWork(duration) {
//   const start = Date.now();
//   while (Date.now() - start < duration) {}
// }

app.get("/", (req, res) => {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    res.send("Hi there");
  });
  // doWork(5000);
});

app.get("/fast", (req, res) => {
  res.send("This was fast!");
});

app.listen(3001);
