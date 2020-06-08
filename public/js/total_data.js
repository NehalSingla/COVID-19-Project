async function getCovidAPI(){

                 /*india data*/ 
        const jsondata=await fetch('https://api.covid19india.org/data.json');
        const jsdata=await jsondata.json();

                const tc=jsdata.statewise[0].confirmed;
                document.getElementById("itotalConfirmed").innerHTML=tc;
                const tr=jsdata.statewise[0].recovered;
                document.getElementById("itotalRecovered").innerHTML=tr;
                const td=jsdata.statewise[0].deaths;
                document.getElementById("itotaldeaths").innerHTML=td;



                /*world data*/ 
                var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
                targetUrl = 'https://thevirustracker.com/free-api?global=stats'
               
                const jsondata2=await fetch(proxyUrl + targetUrl);
                const wjsdata=await jsondata2.json();
                console.log(wjsdata.results[0]);

                const wtc=wjsdata.results[0].total_cases;
                document.getElementById("wtotalConfirmed").innerHTML=wtc;

                const wtr=wjsdata.results[0].total_recovered;
                document.getElementById("wtotalRecovered").innerHTML=wtr;

                const wtd=wjsdata.results[0].total_deaths;
                document.getElementById("wtotaldeaths").innerHTML=wtd;
            
}

getCovidAPI();