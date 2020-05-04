
            async function getCovidAPI()
            {
                const jsondata=await fetch('https://api.covid19india.org/data.json');

                //console.log(jsondata);

                const jsdata=await jsondata.json();
                //console.log(jsdata);
            
                for(var i=1;i<jsdata.statewise.length;i++)
                {

                    /*fetching latest time record*/
                     const country_updated_time=jsdata.statewise[i].lastupdatedtime;
                     /*fetching states*/
                    const country_res=jsdata.statewise[i].state;
                    /*fetching total confirmed cases of particular state*/
                    const country_confirmed=jsdata.statewise[i].confirmed;
                    /*fetching total active cases of particular state*/
                    const country_active=jsdata.statewise[i].active;
                    /*fetching total recovered cases of a particular state*/
                    const country_recovered=jsdata.statewise[i].recovered;
                    /*fetching total deaths of a particular state*/
                    const country_death=jsdata.statewise[i].deaths;


                    
                    var table=document.getElementById('myTable');
                    var row=table.insertRow(i);
                    var cell0=row.insertCell(0);
                    var cell1=row.insertCell(1);
                    var cell2=row.insertCell(2);
                    var cell3=row.insertCell(3);
                    var cell4=row.insertCell(4);
                    var cell5=row.insertCell(5);
                    cell0.innerHTML=country_updated_time;
                    cell1.innerHTML=country_res;
                    cell2.innerHTML=country_confirmed;
                    cell3.innerHTML=country_active;
                    cell4.innerHTML=country_recovered;
                    cell5.innerHTML=country_death;
                    




               
                }
            }

            getCovidAPI();