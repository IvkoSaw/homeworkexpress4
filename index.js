var express = require('express');
var app = express();
// var _ = require('underscore');
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
app.set('view engin', 'ejs');

app.get('/', function(req,res){
	res.send('hello');
});
app.listen(3000);