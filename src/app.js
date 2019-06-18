const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//define paths for Express config
const publicDirPath =path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine views location
app.set('view engine', 'hbs') // set up handlebar for templets
app.set('views', viewsPath) // now point express to custome directory
hbs.registerPartials(partialPath) // contains handler bar module 

//set up static directory to serve
app.use(express.static(publicDirPath)) 

app.get('', (req, res) => {
    res.render('index', {
        title:'Weather',
        name: 'Qiu'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title:'About me',
        name: 'Qiu'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {  //render to help page
        helpText:'some help text',
        title: 'Help',
        name: 'Qiu'
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