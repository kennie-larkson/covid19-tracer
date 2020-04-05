const express = require('express')
const fetch = require('node-fetch')
const body_parser = require('body-parser')
const cors = require('cors')
const app = express();

// app.use(express.static('public'))
app.use(body_parser.urlencoded({extended : true}))
app.use(body_parser.json())

//Bring in the CORS library
app.use(cors({ methods: "GET, POST"}));

app.get('/', async (req,res)=>{
    // res.setHeader('Access-Control-Allow-origin','*');
    var api_options = {
        
        "headers": {
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
            "x-rapidapi-key": "29061a518fmsh604f7cc8ee3b318p151f11jsne9bd5f17246b"
        }
    };
    try {
        //retrieving the data from the api server/endpoint
        const response = await fetch("https://covid-19-data.p.rapidapi.com/totals",api_options)
        const json = await response.json()
         console.log(json)
        
         res.send(json)
        //  console.log(data)
        
        // const data = json

        //sending the retrieved api data to the client side of this application
        
        fetch('http://localhost:4040',{method:"POST",json})
        .then(console.log('Response sent to client'))
        .catch(console.log('There was an error sending response'))
           
    } catch (error) {
        console.log(error)
        console.log('Oops! Something is amiss...')
    }
})

app.listen(4040,()=>{
    console.log('Server running on port: 4040...')
})