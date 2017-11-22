var express  = require('express');
var request  = require('request');

var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});

var port = (process.env.PORT || 8080);
app.listen(port, function (){
  console.log("Server listening on port 8080");
});