var arr;  //global array
var country_name=document.getElementById('country_name'); 

function fetchAlldata()
{
	var req=new XMLHttpRequest();
	req.open('GET','https://api.covid19api.com/summary');
	req.send();
    req.onload=function()
    {
		arr=JSON.parse(req.responseText);
		console.log(arr);
        fetchcountries(arr.Countries);
    }

}
function fetchcountries(countryData)
{
	for(var i=0;i<countryData.length;i++)
	{
		var option=document.createElement('option');
		option.innerHTML=countryData[i].Country;
		option.value=countryData[i].Country;
		 if(countryData[i].Country==='India')
		 {
		 	option.selected=true;
		 	displayResults(countryData[i]);
		 	display(countryData[i]);
		 }


		country_name.appendChild(option);


	}
}

function displayResults(obj)
{
	
	document.getElementById('active').innerHTML=obj.TotalConfirmed;
	document.getElementById('recover').innerHTML=obj.TotalRecovered;
	document.getElementById('death').innerHTML=obj.TotalDeaths;
}
function display(obj)
{
	document.getElementById('recovered').innerHTML=obj.TotalRecovered;
	document.getElementById('activeCases').innerHTML=obj.TotalConfirmed;

}
country_name.addEventListener('change',function(event)
{
	for(var i=0;i<arr.Countries.length;i++)
	{
		if(arr.Countries[i].Country==event.target.value)
		{
			displayResults(arr.Countries[i]);
		}

	}
})

fetchAlldata();