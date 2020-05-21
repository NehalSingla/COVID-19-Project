var mongoose=require('mongoose');

var Schema= mongoose.Schema;
var testSchema= new mongoose.Schema({

	question : String,
	option1: String,
	option2:String,
	option3:String,
	option4:String,
	option5:String,
})

module.exports=mongoose.model('tests',testSchema);
