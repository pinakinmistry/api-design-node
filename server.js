// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

var express = require('express');
var app = express();
var port = 4000;

var jsonData = {count: 12, message: 'hey'};

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html', function (err) {
		if(err) {
			res.status(500).send(err);
		}
	});
});

app.get('/data', function (req, res) {
	res.json(jsonData);
});

app.listen(port, function () {
	console.log('listening on http:localhost:' + port);
});