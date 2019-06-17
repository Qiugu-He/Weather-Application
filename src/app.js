const path = require('path')
const express = require('express')

const app = express()
//static take the folder, this will find all the html file 
const publicDirPath =path.join(__dirname, '../public')

app.set('view engine', 'hbs') // set up handlebar for templets
app.use(express.static(publicDirPath)) 

app.get('', (req, res) => {
    res.render('index', {
        title:'About me',
        name: 'QQQ'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title:'Weather App',
        name: 'HHHe'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {  //render to help page
        helpText:'some help text',
        name: 'HHHe'
    })
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