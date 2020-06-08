   var express=require('express');
var path=require('path');
var app=express();
var ejs = require('ejs');
var port=8000;

/* public */
app.use(express.static(path.join(__dirname,'/public')))
app.set('views', path.join(__dirname, 'views'));  // view engine setup
app.set('view engine', 'ejs');

app.get('/',function(req,res) {
	res.render('dashboard');
})
app.get('/analytics',function(req,res) {
	res.render('analytics');
})

app.get('/chat_page',function(req,res) {
	res.render('chat_page');
})

app.get('/symptom_page',function(req,res) {
	res.render('symptom');
})

app.get('/faq_page',function(req,res) {
	res.render('faq');
})

app.get('/news_page',function(req,res) {
	res.render('news_page');
})

app.get('/precaution_page',function(req,res) {
	res.render('precautions');
})

app.get('/map',function(req,res) {
	res.render('map');
})

app.get('/state',function(req,res) {
	res.render('Statewise_data');
})

app.get('/travelAdvisory',function(req,res) {
	res.render('travelAdvisory');
})

app.get('/essentialAdvisory',function(req,res) {
	res.render('essentialAdvisory');
})

app.listen(port,()=>{console.log("Running on port "+port);});