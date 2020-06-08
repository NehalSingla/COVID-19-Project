var commArr;
var country_names = document.getElementById('country_names');

function fetchAllData() {
	var request = new XMLHttpRequest();
	request.open('GET', 'https://www.travel-advisory.info/api');
	request.send();
	request.onload = function() {
		commArr = JSON.parse(request.responseText)
        for(i in commArr.data)
            fetchCountries(commArr.data[i])
	}
}

function fetchCountries(countryData) {

		var option = document.createElement('option');
		option.innerHTML = countryData.name;
		option.value = countryData.name;
		if(countryData.name === 'India') {
	        option.selected = true;
	        displayResult(countryData)
	    }
  		country_names.appendChild(option)
}

function displayResult(obj) {

    var score = obj.advisory.score

    if(score < 3) {
        var msg = obj.name + " has a current risk level of " + score + " (out of 5). We Advise: Travelling to " + obj.name + " is (relatively) safe."
    }
    else if(score < 4.5) {
        var msg = obj.name + " has a current risk level of " + score + " (out of 5). We Advise: Travelling to " + obj.name + " is not safe."
    }
    else {
        var msg = obj.name + " has a current risk level of " + score + " (out of 5). We Advise: Travelling to " + obj.name + " is not at all safe."
    }

   
    document.getElementById('confirmedCases').innerHTML = msg;
}

country_names.addEventListener('change', function(event) {

	for(i in commArr.data) {
		if(commArr.data[i].name == event.target.value) {
		
			displayResult(commArr.data[i])
		}
	}
})

fetchAllData();