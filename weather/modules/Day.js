export class Day {

    highTemp;
    lowTemp;
    windSpd;
    windDir;
    precipAmount;
    cloudCover;
    humidity;
    effects = [];

    constructor () { }

    convertToKanka() {
        //converts values to Kanka object
    }

    generateWeatherNameKanka() {
        //maps more general weather terms to kanka-supported ones
        //partly cloudy, mostly cloudy, scattered clouds is 'cloudy and sunny'.
    }

    generateWeatherName() {
        //finds weather names for things, based off of Kanka
        //like high humid, low precip, high cloudcover === foggy
        //cloudcover 50% is 'partly cloudy'
    }



}