
const IndiaCHART =document.getElementById('DoughNutChart');

async function getCovidAPI()
{
const jsondata =await fetch('https://api.covid19india.org/data.json');

const jsdata=await jsondata.json();

const tc=jsdata.statewise[0].confirmed;
const tr=jsdata.statewise[0].recovered;
const td=jsdata.statewise[0].deaths;

var data1={
labels:["Active","Recovered","Deaths"],
datasets:[
{
label :"Cases",
data:[tc,tr,td],
backgroundColor: [
    "#19B8FC",
    "#7CD306",
    "#D30606"
]
}
]
};
let pieChart = new Chart( IndiaCHART,{
type:'doughnut',
data:data1,
options:{
	
}
});

}

getCovidAPI();

