const express = require('express')
const fetch = require('node-fetch')
const body_parser = require('body-parser')
const corslib = require('cors')
let port = process.env.PORT
const app = express();

if(port == null || port == ""){ port = 8000}

// app.use(express.static('public'))
// app.use(body_parser.urlencoded({extended : true}))
// app.use(body_parser.json())

//Bring in the CORS library
// app.use(express.static('public'))
// app.use(express.static('style'))
// app.use(express.static('images'))
// app.use(express.static('src'))
app.use(express.json({limit: '1mb'}))
app.use(corslib({ methods: "GET, POST"}));

let json ;
// datastring
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
    console.log(response.headers)
         json = await response.json()
        // const data = json
        console.log(json)
    //iterating through the array of objects in the json data using for...of
    json.map(ele=>{
        // console.log(ele.confirmed)
        const confirmed_cases = ele.confirmed;
        const recoveries = ele.recovered;
        const critical_cases = ele.critical;
        const deaths = ele.deaths
        console.log('confirmed cases: '+ confirmed_cases+'\n'+
        'recoveries: '+recoveries+'\n'+'critical cases: '+critical_cases+'\n'+'deaths: '+deaths)
    })
    
       
        
    } catch (error) {
        console.log(error)
        console.log('Oops! Something is amiss...')
    }
}
fetchAPI()

app.get('/', (req,res)=>{
    // fetchAPI()
    res.setHeader('Access-Control-Allow-Origin','*')
    res.json(json)
    // res.header({'Access-Control-Allow-Origin':'*'})
    // res.send('')
    
    
})

app.listen(port,()=>{
    console.log(`Server running on port: ${port}...`)
})