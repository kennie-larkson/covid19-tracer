const express = require('express')

const app = express();

app.get('/',(req,res)=>{

    const fetchApi= async()=>{
        const fetch = require('node-fetch')
        const repsonse = await fetch("covid-19-coronavirus-statistics.p.rapidapi.com",{
            header:{
                'Access-Control-Allow-Origin':'*'
            }
        });
        const data = await repsonse.json();
        res.send(data)
        console.log(data) 
        .then(()=>{console.log("Fetch Successful!")})
    .catch(err=>{ console.log(err)});
    }
    fetchApi()
    
    
})



app.listen(4040,()=>{
    console.log('Server running on port: 4040...')
})