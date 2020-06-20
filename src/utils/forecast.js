const request = require('request')

const forecast = (lat, longt, callback)=>{
    const url = 'https://api.darksky.net/forecast/6edfa9fb3e21032224ea83f69ad86ad0/'+lat +',' +longt


    request({url, json: true}, (error, {body})=>{
        if(error){
            callback('Unable to connect to weather services!', undefined)// this function will send back to caller 'geocode'
        }else if(body.error, undefined){
            callback('Unable to find location !', undefined)
        }else{
            callback(undefined, body.daily.data[0].summary + 
            ' It is currently ' + body.currently.temperature + 
            ' degress out. This high today is ' + body.daily.data[0].temperatureHigh +' with the low of '+body.daily.data[0].temperatureLow +'. There is a ' + body.currently.precipProbability +
            ' % chance of rain. ') // when call back invoked, undefined is returned for error parameter, and another parameter is for data parameter
        }
    })
}
module.exports = forecast