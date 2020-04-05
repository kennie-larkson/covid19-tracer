

const loadApp=()=>{
    let element, attached ;
    const create = (ele)=>{
         element = document.createElement(ele);
        return element
    }
    const addEleToBody = (element)=>{
         attached = document.body.append(element);
        return attached
    }

    create('p')
    addEleToBody(element)
    element.textContent = 'Here\'s #COVID19...'

 fetch('/')
    
}



 document.addEventListener('DOMContentLoaded', loadApp)



