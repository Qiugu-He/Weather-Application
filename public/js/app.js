console.log("Client side is set up!")

const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')

weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault() //dont allow the browser to refeshed

    const location = searchElement.value
    
    fetch('http://localhost:3000/weather?address=' + location).then((response)=>{ // set up call back function, then the process we can access response
    response.json().then((data1)=>{ // when this access is done, we can access data
        if(data1.error){
            console.log(data1.error)
        }else{
            console.log(data.location)
            console.log(data.forecast)
        }
    })
    })

})
