const path = require('path')
const express = require('express')

const app = express()


//static take the folder, this will find all the html file 
const publicDirPath =path.join(__dirname, '../public')
app.use(express.static(publicDirPath)) 


app.get('/weather', (req,res)=>{
    res.send({
        forecast: 'It is snowing',
        location: 'Winnipeg'
    })
})

app.listen(3000, ()=>{//callback func
    console.log('Server is up on port 3000.')
}) // 3000 port #