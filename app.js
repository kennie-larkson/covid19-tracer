//create a function to send a fetch GET request to the backend/server
const fetchBackend = async()=>{
    
    try{
        //request the data from the backend using fetch
        const response = await fetch('http://localhost:4040',{method:'GET',headers:{'Access-Control-Allow-Origin':'*'}})
        //ensure the response is in JSON format i.e an array of JSON object ( json = [{"key":"value"}])
        const json = await response.json()
        // console.log(json)
        //iterate through each element of the array
    for (const ele of json){
        //target the html div element with class 'container'
        // const container = document.querySelector('.container')
        // container.innerHTML = `${datastring}`
        //set the contents of the target div using es6 template literal and interpolation syntax
        //  container.innerHTML = `
        //         Total Confirmed: ${ele.confirmed_cases}
        //         Recovered: ${ele.recoveries}
        //         Critical:${ele.critical_cases}
        //         Total Deaths: ${ele.death_cases}
        //     ` 
            const cases = document.getElementById('total_cases')
            cases.innerHTML= `WORLD REPORTED CASES <br>
                                ${ele.confirmed_cases}
                                `
            const recovered = document.getElementById('recoveries')
            recovered.innerHTML = `WORLD REPORTED RECOVERIES <br>
                                    ${ele.recoveries} 
                                    `
            const critical = document.getElementById('critical')
            critical.innerHTML = `WORLD REPORTED CRITICAL<br>
                                    ${ele.critical_cases}
                                    `
            const deaths = document.getElementById('deaths')
            deaths.innerHTML = `WORLD REPORTED DEATHS <br>
                                ${ele.death_cases}
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



