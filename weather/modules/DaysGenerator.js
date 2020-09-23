import { Day } from './Day.js';
import { round } from './Helper.js';

//TODO cleaner way to do this?
const dayFields = ["highTemp", "lowTemp", "windSpd", "windDir", "precipAmount", "cloudCover", "humidity"];

const co = {
    cloudIntensity: 1.3,
}

function adjustForCloudCover(temp, coverPct, up) {
    return temp + (coverPct * co.cloudIntensity * (up ? 1 : -1));
}

function generateClimateDay(num, climate) {
    const day = new Day();
    day.highTemp = climate.avgTemp;
    day.lowTemp = climate.avgTemp;
    day.cloudCover = 0.5;
    return day;
}

function generateThreeDayLead(num, climate, days) {
    const climateDay = generateClimateDay(num, climate);
    const neg = {};
    for (let i = 1; i <= 3; i++) {
        //grab the last three entries, placing dummy values into days that don't exist 
        //TODO look at taking the check here out and instead checking in a previous if statement, because 
        //the check will only fire for index < 3
        neg[i] = days[num - i] == null ? climateDay : days[num - i];
    }
    const values = {};
    dayFields.forEach( (field) => {
        //generate three-day average with the latest day counting 2x as much
        //TODO extra consideration for wind. Wind will tend to veer, not randomize around previous values
        values[field] = (neg[1][field] * .5) + (neg[2][field] * .25) + (neg[3][field] * .25); 
    });
    return new Day().withValues(values);
}

export class DaysGenerator {

    days = [];

    constructor() {

    }

    init(climateModel, days) {
        this.days = days;
        this.climateModel = climateModel;
        return this;
    }

    generate() {
        for (let i = 0; i < this.days.length; i++) {
            this.days[i] = this.generateDay(i);
        }
        return this.days;
    }

    generateDay(i) {
        const climate = this.climateModel.interpolate(i);
        const day = new Day();
        const threeDay = generateThreeDayLead(i, climate, this.days);
        
        day.highTemp = threeDay.highTemp;
        day.lowTemp = threeDay.lowTemp; //TODO
        day.cloudCover = threeDay.cloudCover;



        ///
        day.highTemp = round(adjustForCloudCover(day.highTemp, day.cloudCover), 2);
        day.lowTemp = round(adjustForCloudCover(day.lowTemp, day.cloudCover, true), 2); 
        if (day.highTemp < day.lowTemp) {
            const t = day.lowTemp;
            day.lowTemp = day.highTemp;
            day.highTemp = t;
        }
        //TODO

        return day;
    }
    
}