const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const app = express();
const port = 8085;
const server = http.createServer(app);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())


app.post("/api", function (req, res) {
  console.log(req.body) // populated!
  res.send(req.body);
});

server.listen(port, () => console.log(`Listen on port: ${port}`))