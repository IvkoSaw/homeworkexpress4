var express = require('express');
var app = express();
var fs = require('fs');
var _ = require('underscore');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static('public'));
app.use(express.static('node_modules/jquery/dist'));
app.use(express.static('node_modules/bootstrap'));
app.set('view engine', 'ejs');

app.post('/newArticle', function(req,res){
	var name = req.body.name;
	var email = req.body.email;
	var phoneNum = req.body.phoneNum;
	var subject = req.body.subject;
	var text = req.body.text;

	var obj = {};
	obj.name = name;
	obj.email = email;
	obj.phoneNum = phoneNum;
	obj.subject = subject;
	obj.body = text;
	var json = require('./data.json');
	var bigestId = _.max(json, function(elm,index){
		return elm.id;
	});
	obj.id = bigestId.id;
	obj.id++;
	var jsonString = JSON.stringify(json);
	var objString = JSON.stringify(obj);
	var a = jsonString.indexOf(']');
	var b = jsonString.substring(0,a);
	var newJsonStr = b+","+objString+']';
	// var newJson = JSON.parse(newJsonStr);
	console.log(JSON.parse(newJsonStr));
	fs.writeFile('./data.json', newJsonStr, function(err){
		if (err) {
			console.log(err);
		}
	});
});

app.get('/', function(req,res){
	fs.readFile("./data.json", "utf8", function(err, data){
		if (err) {
			console.log(err);
		}
		res.render('index', {articles: JSON.parse(data)});
	});
});

app.listen(3000);