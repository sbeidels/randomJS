var express = require('express');

var app = express();
var handlebars = require("express-handlebars").create({defaultLayout:"main"});

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.set('port', 3000);

function getRand() {
	var randNum = {};
	randNum.stringNum = String(Math.random());
	return randNum;
}
app.get('/', function(req, res) {
    res.render("stringNum", getRand());
});

app.use(function(req, res) {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not found');
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 - server error');
});

app.listen(app.get('port'), function() {
  console.log('Random Num started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

