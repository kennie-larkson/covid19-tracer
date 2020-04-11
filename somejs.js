

const data = [
    {
        confirmed: '123456',
        recovered: '1234567',
        critical: '2356',
        deaths: '678'
    }
]
 data.map(ele=>{
    // console.log(ele.confirmed)
    const confirmed_cases = ele.confirmed;
    const recoveries = ele.recovered;
    const critical_cases = ele.critical;
    const deaths = ele.deaths
    console.log('confirmed cases: '+ confirmed_cases+'\n'+
    'recoveries: '+recoveries+'\n'+'critical cases: '+critical_cases+'\n'+'deaths: '+deaths)
})
// console.log(newdata)