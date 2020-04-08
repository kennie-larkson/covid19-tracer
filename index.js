const express = require('express')
const fetch = require('node-fetch')
const body_parser = require('body-parser')
const corslib = require('cors')
const app = express();

// app.use(express.static('public'))
// app.use(body_parser.urlencoded({extended : true}))
// app.use(body_parser.json())

//Bring in the CORS library
app.use(corslib({ methods: "GET, POST"}));

let data =[] ,datastring
const fetchAPI= async()=>{
    
    var api_options = {
        
        headers: {
            
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
            "x-rapidapi-key": "29061a518fmsh604f7cc8ee3b318p151f11jsne9bd5f17246b"
        }
        
        
    };
    try {
        //retrieving the data from the api server/endpoint
        const response = await fetch("https://covid-19-data.p.rapidapi.com/totals",api_options)
    //converting the api response to json format
        const json = await response.json()
        console.log(json)
    //iterating through the array of objects in the json data using for...of
    
        for(const ele of json){
            datastring = `
            Total Confirmed: ${ele.confirmed}
            Recovered: ${ele.recovered}
            Critical:${ele.critical}
            Total Deaths: ${ele.deaths}`
            console.log(datastring);

            data.push({
            "confirmed_cases":ele.confirmed,
            "recoveries":ele.recovered,
            "critical_cases":ele.critical,
            "death_cases":ele.deaths})
            
        }
        
    } catch (error) {
        console.log(error)
        console.log('Oops! Something is amiss...')
    }
}


app.get('/', async (req,res)=>{
    fetchAPI()
    
    res.send(data)
    
})

app.listen(4040,()=>{
    console.log('Server running on port: 4040...')
})