const request = require('request')

const geocode = (address, callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address+'.json?access_token=pk.eyJ1Ijoia2FvY2hpIiwiYSI6ImNqd3pma3diOTE0cWs0OGp6dHUxMWlqeHUifQ.cg4XNASsn-UU_YSdC4luSg&limit=1'

    request({url, json: true}, (error, {body})=>{
        if(error){
            callback('Unable to connect to location services!', undefined)// this function will send back to caller 'geocode'
        }else if(body.features.length === 0){
            callback('Unable to find location, Try another search? ', undefined)
        }else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longtitude: body.features[0].center[0],
                location: body.features[0].place_name
            }) // when call back invoked, undefined is returned for error parameter, and another parameter is for data parameter
        }
    })
}
module.exports = geocode