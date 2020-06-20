const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

const port = process.env.PORT || 3000//heroku set PORT or default port

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
        title:'About Application',
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
    if(!req.query.address){
        return res.send({
            error:'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, {latitude, longtitude, location} = {})=>{ // = {}, which set up the obj, so if the address not provide, the web still working properly 
        if(error){
            return res.send({ error })
        }

        forecast(latitude, longtitude, (error, forecastData) =>{
            if(error){
                return res.send({error})
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })

})

app.get('/products', (req,res)=>{
    //req.query.search -> the property that get search from client
    if(!req.query.search){
        return res.send({
            error:'You must provide a serch term!'
        })
    }
    res.send({
        products:[]
    })
})

//match any page that havent matched so far that start with /help/
//this is catch 404 for specific help content require
app.get('/help/*', (req, res)=>{
    res.render('404', {  //render to help page
        title: '404',
        name: 'Qiu',
        errorMessage: 'Help article not found. '
    })
})

//404 page, should be set at last
//because Express match page name from begine 
//of all render
app.get('*', (req, res)=>{
    res.render('404', {  //render to help page
        title: '404',
        name: 'Qiu',
        errorMessage: 'Page not found!'
    })
})

app.listen(port, ()=>{//callback func
    console.log('Server is up on port ' + port)
}) // 3000 port #