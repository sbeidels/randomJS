var express = require('express');

var app = express();

app.set('port', 3000);

app.get('/', function(req, res) {
  res.type('text/plain');
  var num = Math.random();
  res.send(String(num));
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
~
