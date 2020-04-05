
const fetchBackend = async()=>{
    
    try{
        const response = await fetch('http://localhost:4040',{method:'GET',headers:{'Access-Control-Allow-Origin':'*'}})
        const json = await response.json()
        // console.log(json)
    for (const ele of json){
        
        const container = document.querySelector('.container')
        // container.innerHTML = `${datastring}`
         container.innerHTML = `
                Total Confirmed: ${ele.confirmed_cases}
                Recovered: ${ele.recoveries}
                Critical:${ele.critical_cases}
                Total Deaths: ${ele.death_cases}
            ` 
    }
}
catch(err){ console.log(err)} 
}


const loadApp=()=>{


fetchBackend()
    
}


 document.addEventListener('DOMContentLoaded', loadApp)



