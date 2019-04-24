const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


let port = 3002;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

