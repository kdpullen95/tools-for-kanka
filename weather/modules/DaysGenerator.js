import { Day, DayConstants } from './Day.js';
import forecast from './ClimateMath.js';
import { previousEntries, round } from './Helper.js';


function generateClimateDay(climate) {
    const day = new Day();
    day.dayTemp = climate.avgTemp + climate.avgDayNightSkew/2;
    day.nightTemp = climate.avgTemp - climate.avgDayNightSkew/2;
    day.humidity = climate.avgHumidity;
    day.cloudCover = 0.5;
    day.precipAmount = 2;
    return day;
}

function generateThreeDayLead(climate, lastThreeDays) {
    const climateDay = generateClimateDay(climate);
    console.log(climateDay);
    //replace the null values in lastThreeDays with climateDay
    lastThreeDays = lastThreeDays.map( day => day != null ? day : climateDay);
    const dayValues = {};
    DayConstants.randomizedFields.forEach( (field) => {
        dayValues[field] = forecast.weightedAveragePositive(lastThreeDays.map(day => day[field]));
    });
    dayValues.windDir = forecast.generateVeer(lastThreeDays.map(day => day.windDir));
    return new Day().withValues(dayValues);
}


export class DaysGenerator {

    days = [];

    constructor(climateModel) {
        this.climateModel = climateModel;
    }

    generate(days) {
        const generatedDays = [];
        days.forEach( (day, i) => {
            generatedDays.push(this.generateDay(day, i, generatedDays));
        });
        return generatedDays;
    }

    generateDay(day, i, generatedDays) {
        //generate base values
        const climate = this.climateModel.interpolate(i);
        const threeDay = generateThreeDayLead(climate, previousEntries(generatedDays, 3));
        
        //assign simple values
        day.dayTemp = forecast.randomizeDayTemperature(threeDay, climate, day);
        day.nightTemp = forecast.randomizeNightTemperature(threeDay, climate, day);
        day.humidity = forecast.randomizeHumidity(threeDay, climate, day);
        day.cloudCover = forecast.randomizeCloudCover(threeDay, climate, day);
        day.precipAmount = forecast.randomizePrecipAmount(threeDay, climate, day);

        //make adjustments based on complex factors
        day.dayTemp = round(forecast.generateDayTemp(day, climate), 2);
        day.nightTemp = round(forecast.generateNightTemp(day, climate), 2);
        day.humidity = round(day.humidity, 2);
        day.cloudCover = round(day.cloudCover, 2);
        day.precipAmount = round(day.precipAmount, 2);

        //return the newly completed day
        return day;
    }
    
}