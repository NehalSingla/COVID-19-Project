var arr;
var state_names=document.getElementById('state_names');
var city=document.getElementById('city');

function fetchdata() {
	var request= new XMLHttpRequest();
	request.open('GET','https://api.covid19india.org/resources/resources.json');
	request.send();
	request.onload=function()
	{
		arr=JSON.parse(request.responseText);
		for(i in arr.resources)
			fetchStates(arr.resources[i]);
	}
}

function fetchStates(data) {
    var option = document.createElement('option');
    option.innerHTML= data.state;
    option.value=data.state;
    
    state_names.appendChild(option);
 
    var x = document.getElementById("state_names");
    
    var listLength = x.length;
     for (var i = 0; i < listLength; i++) {
        for (var j = 0; j < listLength; j++) {
            if (x.options[i].value == x.options[j].value && i != j) {
                    x.remove(j);
                    listLength--;
            }
        }
      }
}

state_names.addEventListener('change', function(event) {
  $('#city')
    .find('option')
    .remove()
    .end()

    $('myTable tr').remove();

	for(i in arr.resources) {
		if(arr.resources[i].state == event.target.value) {
			fetchcities(arr.resources[i]);
	  }
  }

})

function fetchcities(statesData) {
  
	var option=document.createElement('option');
	option.innerHTML=statesData.city;
	option.value=statesData.city;
        
  city.appendChild(option);    

  var x = document.getElementById("city");
    
  var listLength = x.length;
  for (var i = 0; i < listLength; i++) {
    for (var j = 0; j < listLength; j++) {
      	if (x.options[i].value == x.options[j].value && i != j) {
          x.remove(j);
          listLength--;
      }
    }
  }

}

city.addEventListener('click',function(event) { 
        $('myTable tr').remove();

	var k=0;
	for(i in arr.resources) {
		if(arr.resources[i].city == event.target.value) {
			fetchEssential(arr.resources[i],k);
	  }
  }

})

function fetchEssential(info,i) {
 
	var table=document.getElementById('myTable');
            var row=table.insertRow(i+1);
            var cell0=row.insertCell(0);
            var cell1=row.insertCell(1);
            var cell2=row.insertCell(2);
            var cell3=row.insertCell(3);
          
            cell0.innerHTML=info.category;
            cell1.innerHTML=info.descriptionandorserviceprovided;
            cell2.innerHTML=info.nameoftheorganisation;
            cell3.innerHTML=info.phonenumber;
           
}

fetchdata();