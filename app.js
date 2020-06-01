
var express=require('express');
var path=require('path');
var app=express();
var session = require('express-session');
var ejs = require('ejs');
var port=8000;

/*/public*/

app.use(express.static(path.join(__dirname,'/public')))
app.set('views', path.join(__dirname, 'views'));  // view engine setup
app.set('view engine', 'ejs');



app.get('/chat_page',function(req,res)
{
	res.render('chat_page');
})



app.get('/symptom_page',function(req,res)
{
	res.render('symptom');
})


app.get('/faq_page',function(req,res)
{
	res.render('faq');
})

app.get('/news_page',function(req,res)
{
	res.render('news_page');
})

app.get('/precaution_page',function(req,res)
{
	res.render('precautions');
})
app.listen(port,()=>{console.log("Running on port "+port);});