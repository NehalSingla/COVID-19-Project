
            async function getCovidAPI()
            {

                 /*india data*/ 
                const jsondata=await fetch('https://api.covid19india.org/data.json');

                //console.log(jsondata);

                const jsdata=await jsondata.json();
                console.log(jsdata);

               
                const tc=jsdata.statewise[0].confirmed;
                document.getElementById("itotalConfirmed").innerHTML=tc;
                const tr=jsdata.statewise[0].recovered;
                document.getElementById("itotalRecovered").innerHTML=tr;
                const td=jsdata.statewise[0].deaths;
                document.getElementById("itotaldeaths").innerHTML=td;



                /*world data*/ 
                const jsondata2=await fetch('https://api.covid19api.com/summary');
                const wjsdata=await jsondata2.json();
                console.log(wjsdata);

                const wtc=wjsdata.Global.TotalConfirmed;
                document.getElementById("wtotalConfirmed").innerHTML=wtc;
                const wtr=wjsdata.Global.TotalRecovered;
                document.getElementById("wtotalRecovered").innerHTML=wtr;
                const wtd=wjsdata.Global.TotalDeaths;

                document.getElementById("wtotaldeaths").innerHTML=wtd;
            
            }

            getCovidAPI();