console.log("Client side is set up!")

const weatherForm = document.querySelector('form')
const search = document.querySelector('input') // the content of input

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

//event handler
weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const location = search.value // get the user enter location
    messageOne.textContent='Loading ...'
    messageTwo.textContent = ''

    fetch('/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                messageOne.textContent = data.error
            }else{
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})