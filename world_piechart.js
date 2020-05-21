
const WorldPieCHART =document.getElementById('PIEChart');

async function getCovidAPI()
{

const jsondata2=await fetch('https://api.covid19api.com/summary');
                const jsdata2=await jsondata2.json();
                console.log(jsdata2);

                const wtc=jsdata2.Global.TotalConfirmed;
               
                const wtr=jsdata2.Global.TotalRecovered;
               
                const wtd=jsdata2.Global.TotalDeaths;
                var data1={
                labels:["Confirmed","Recovered","Deaths"],
                datasets:[
                {
                label :"Cases",
                data:[wtc,wtr,wtd],
                backgroundColor: [
                    "#19B8FC",
                    "#7CD306",
                    "#D30606"
                ]
                }
                ]

                };
                let pieChart = new Chart( WorldPieCHART, {
                type:'pie',
                data:data1,
                options:{}
                });

                }

getCovidAPI();

