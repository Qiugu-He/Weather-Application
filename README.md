# Weather App

The app is developed for user to lookup weather basedon their location
<br>Site address: https://qiu-weather-application.herokuapp.com/

# Get started
- Install node js on your machine
- cd to root directory, type "npm install" for dependencies
- type "npm run start" to start the server
- Go to http://localhost:3000

# File Structure:
The App consists by 3 pages(weather, about, and help). The page's set up by using Node.js Express framework (server side). The application's static content(partial) across each page (header/footer)was implemented by using hbs partial module(hbs), and the dymanic conent for each page was using handlerbar(hbs) views engine module to render pages.

The application allows user to enter an address, the server will fetch that address and convert it into longitude and latitude through Mapbox API. Then the forcast information(fetch from darksky API) for that specific location will be displayed to the client side.

# Site screenshot:
<img src="https://github.com/Qiugu-He/Weather-Application/blob/master/Home.png" alt="alt text" width="60%" height="60%">



