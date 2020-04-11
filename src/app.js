//create a function to send a fetch GET request to the backend/server
const fetchBackend = async()=>{
    
    try{
        //request the data from the backend using fetch
        const response = await fetch('http://localhost:8000',{method:'GET'})
        //ensure the response is in JSON format i.e an array of JSON object ( json = [{"key":"value"}])
        const json = await response.json()
        // const data = json
        console.log(json)
        //iterate through each element of the array
    for (const ele of json){
        //target the html div elements with and setting their contents
    
            const cases = document.getElementById('figures_cases')
            cases.innerHTML= ` 
                                ${ele.confirmed}
                                `
            const recovered = document.getElementById('figures_recoveries')
            recovered.innerHTML = ` ${ele.recovered} 
                                    `
            const critical = document.getElementById('figures_critical')
            critical.innerHTML = `${ele.critical}
                                    `
            const deaths = document.getElementById('figures_deaths')
            deaths.innerHTML = ` ${ele.deaths}
                                `
    }
}
catch(err){ console.log(err)} 
}

//create the function that loads up dynamic contents to the webpage 
const loadApp=()=>{

//call the function that fetches the needed data from the backend/server
fetchBackend()
    
}

//add event listener to run the loadApp method once the weppage is refreshed/ browser is opened
 document.addEventListener('DOMContentLoaded', loadApp)
// loadApp()



