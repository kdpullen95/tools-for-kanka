export const DayConstants = {
    randomizedFields: [ 'dayTemp', 'nightTemp', 'windSpd', 'precipAmount', 'cloudCover', 'humidity' ]
}

export class Day {

    dayTemp;
    nightTemp;
    windSpd;
    windDir;
    precipAmount;
    cloudCover;
    humidity;
    effects = [];

    constructor (date, season) {
        this.date = date;
        this.season = season;
    }

    convertToKanka(calendar) {
        //if exists, return that since it's already been generated
        //TODO
        //converts values to Kanka object
        //uses calendar for dates
    }

    generateWeatherNameKanka() {
        //if exists, return that since it's already been generated
        //TODO
        //maps more general weather terms to kanka-supported ones
        //partly cloudy, mostly cloudy, scattered clouds is 'cloudy and sunny'.
    }

    generateWeatherName() {
        //if exists, return that since it's already been generated
        //TODO
        //finds weather names for things, based off of Kanka
        //like high humid, low precip, high cloudcover === foggy
        //cloudcover 50% is 'partly cloudy'
    }

    withValues(values) {
        return { ...this, ...values } ;
    }



}