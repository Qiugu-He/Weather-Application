const express = require('express')

const app = express()

// configer waht server should do
app.get('', (req, res)=>{ // root page
    res.send('<h1>Weather</h1>') // send to requester
}) 

app.get('/help', (req,res)=>{
    res.send([{
        name: 'me'
    }, {
        name:'he'
    }])
})

app.get('/about', (req, res)=>{
    res.send('<h1>About</h>') // send to requester

}) 

app.get('/weather', (req,res)=>{
    res.send({
        forecast: 'It is snowing',
        location: 'Winnipeg'
    })
})

app.listen(3000, ()=>{//callback func
    console.log('Server is up on port 3000.')
}) // 3000 port #