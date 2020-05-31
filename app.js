//var mongodb=require('mongodb');
//var mongoose=require('mongoose');
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

// var mongoDB = 'mongodb://localhost/covidTest';
// mongoose.set('useFindAndModify',false);
// mongoose.connect(mongoDB,{useNewUrlParser:true});
// //var db = mongoose.connection;

// mongoose.connection.on('error',(err)=>{
// 	console.log('DB connection Error');
// })

// mongoose.connection.on('connected',(err)=> {
// 	console.log('DB connected');
// })

// var test = require('./models/testSchema');


// var Schema= mongoose.Schema;
// var testSchema= new mongoose.Schema({

// 	question : String,
// 	option1: String,
// 	option2:String,
// 	option3:String,
// 	option4:String,
// 	option5:String,
// });

// var test=mongoose.model("tests", testSchema);

// app.get('/test',function(req,res)
// {
//     console.log('check');
//     test.find({},function(err,result)
// 	{
// 		if(err)
// 			throw err;
// 		console.log(result);
// 	})
// });

app.get('/chat_page',function(req,res)
{
	res.render('chat_page');
})

// app.get('/ques',function(req,res)
// {
// 	console.log('hello');
// 	test.find({},function(err,result)
// 	{
// 		if(err)
// 			throw err;
// 		//console.log(result);
// 		res.send(result);
// 	})

// })    

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
app.listen(port,()=>{console.log("Running on port "+port);});