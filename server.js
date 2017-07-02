/** Dependencies **/
var express = require('express'),
	app = express(),
	jade = require('jade'),
	bodyParser = require('body-parser'),
	path = require('path'),
	PORT = process.env.PORT || 8081;

/** Middleware **/

// Deprecated. Please refer to line 21-23.
// app.use(express.static(path.resolve(__dirname, 'client')));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
var assetsPath = path.join(__dirname, 'assets');
app.set('views', assetsPath);
app.set('view engine', 'jade')


app.all('*', function(req, res) {
	res.render('index');
});

app.listen(PORT, () => {
  console.log('Listening on port '.concat(PORT));
});
