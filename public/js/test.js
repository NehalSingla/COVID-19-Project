
var test= document.getElementById('test');

test.addEventListener('click',function()
{
	//console.log('hello');
	var request= new XMLHttpRequest();
	request.open('GET','/test');
    //request.setRequestHeader('Content-Type',"application/json");

	request.send();
	request.addEventListener('load',function()
	 {
 	console.log('Data Saved Successfully');
	// alert('New Vehicle Registered');
	 });

	window.location="/chat_page";
})