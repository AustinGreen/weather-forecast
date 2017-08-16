# Weather Forecast App

![Weather Forecast](https://raw.githubusercontent.com/AustinGreen/weather-forecast/master/home_page.png)

## Run Locally
```
$ git clone https://github.com/AustinGreen/weather-forecast.git
$ cd weather-forecast
$ yarn
```
### Set up API key
Weather Forecast App uses the [Open Weather Map API](http://openweathermap.org/api). Visit the website to get your own API key (it's free).

Once you have your key, run the following commands in the project's root directory:
```
$ cd src
$ mkdir constants && cd $_
$ touch index.js
```

In the `constants/index.js` file, add the following API constants. Don't forget to include your API key.
```
export const PATH_BASE = 'http://api.openweathermap.org/data/2.5';
export const PATH_SEARCH = '/weather?q=';
export const PATH_FORECAST = '/forecast/daily?q=';
export const PARAM_TYPE = 'type=accurate';
export const PARAM_UNIT = 'units=imperial';
export const PARAM_APPID = 'APPID=YOUR_API_KEY_HERE';
export const PARAM_DAYS = '&cnt=5';
```

You are now ready to start the server, and get the weather forecast.
```
$ yarn start
```
