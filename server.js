var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	path = require('path'),
	PORT = process.env.PORT || 8081;

/** Middleware **/
app.use(express.static(path.resolve(__dirname, 'client')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({type: 'application/vnd.api+json'}));


app.listen(PORT, () => {
  console.log('Listening on port '.concat(PORT));
});