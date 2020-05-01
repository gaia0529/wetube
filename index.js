const express = require("express");
const app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

app.get('/', function (req, res) {
    res.send('hello world')
})

app.listen(PORT, handleListening);