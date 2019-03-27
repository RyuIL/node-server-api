const express = require("express");
const app = express();
const mysql = require("mysql");
const connection = require("./db/mysql");
const bodyParser = require("body-parser");
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/users", require("./api/users"));
app.use("/db", require("./db/showAllData"));

app.get('/db', (req,res)=> {
      connection.connect();
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World \n');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

module.exports = app;
