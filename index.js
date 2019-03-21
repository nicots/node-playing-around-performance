process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require("cluster");
const crypto = require("crypto");
// console.log(cluster.isMaster);

// Is the file bneing exectuted in master mode?
if (cluster.isMaster) {
  // Cause index.js to be executed *again* but
  // in child mode
  cluster.fork();
  cluster.fork();
  // cluster.fork();
  // cluster.fork();
  // cluster.fork();
} else {
  // Im a child, Im going to act like a server
  // and do nothing else
  const express = require("express");
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
}
