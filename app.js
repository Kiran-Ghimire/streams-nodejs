const express = require("express");
const app = express();
const { createReadStream } = require("fs");

app.get("/", function (req, res) {
  let readStream = createReadStream("./index.html");
  readStream.pipe(res);
  readStream.on("error", (err) => {
    console.log("Error in read stream...");
  });
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
