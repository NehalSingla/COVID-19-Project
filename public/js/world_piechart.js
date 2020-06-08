
const WorldPieCHART =document.getElementById('PIEChart');

async function getCovidAPI()
{
            var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'https://thevirustracker.com/free-api?global=stats'
   
            const jsondata2=await fetch(proxyUrl + targetUrl);

            const wjsdata=await jsondata2.json();

                const wtc=wjsdata.results[0].total_cases;
               
                const wtr=wjsdata.results[0].total_recovered;
               
                const wtd=wjsdata.results[0].total_deaths;
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

