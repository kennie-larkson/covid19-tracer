const express = require('express')
const fetch = require('node-fetch')
const body_parser = require('body-parser')
const app = express();

// app.use(express.static('public'))
app.use(body_parser.urlencoded({extended : true}))
app.use(body_parser.json())


app.get('/', async (req,res)=>{
    res.setHeader('Access-Control-Allow-origin','*');
    var options = {
        
        "headers": {
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
            "x-rapidapi-key": "29061a518fmsh604f7cc8ee3b318p151f11jsne9bd5f17246b"
        }
    };
    try {
        const response = await fetch("https://covid-19-data.p.rapidapi.com/totals",options)
        const json = await response.json()
         console.log(json)
         console.log(response.headers)
        // const data = await JSON.parse(json)
        
        res.send(json)
        
    } catch (error) {
        console.log(error)
        console.log('Oops! Something is amiss...')
    }
    
    
})



app.listen(4040,()=>{
    console.log('Server running on port: 4040...')
})