// import { json, response } from "express";


const loadApp= async()=>{
    // let element, attached ;
    // const create = (ele)=>{
    //      element = document.createElement(ele);
    //     return element
    // }
    // const addEleToBody = (element)=>{
    //      attached = document.body.append(element);
    //     return attached
    // }

    // create('p')
    // addEleToBody(element)
    // element.textContent = 'Here\'s #COVID19...'

 const response = await fetch('http://localhost:4040')
 const json = await response.json()
 console.log(json)
 .then(console.log('fetch successful'))
 .catch((err)=>{console.log(err)})
    
}

loadApp()


//  document.addEventListener('DOMContentLoaded', loadApp)



