const express = require("express");

const PORT = process.env.PORT || 8000;

const app = express();

console.log(process);

app.listen(PORT, () => {
  console.log(`Server run on ${PORT}`);
});

app.use(express.static("FE")); // jump into folder "front-end" and serve index.html

app.get("/2", (req, res) => {
  res.sendFile(__dirname + "/FE/index2.html");
});

app.get("/download", (req, res) => {
  res.download("./log/log.txt");
});
