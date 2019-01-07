var express = require('express');
var app = express();
const getTime = require('./getTime');

var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use(express.static('public'));

// Serve the html file
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// API that responds at path "/:time"
app.get("/:time", (req, res) => {
  const inputTime = req.params.time;
  res.json(getTime(inputTime));
});

// Start the server
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

// middleware for handeling errors
app.use('/', (err, req, res, next) => {
  console.log('uh oh...something broke');
  res.sendStatus(err.status || 500);
});