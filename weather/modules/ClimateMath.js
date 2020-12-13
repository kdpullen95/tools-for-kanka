import { randomUnit, randomPositiveUnit, randomHalfUnit } from './Helper.js';

export default { randomizePrecipAmount, generateDayTemp, generateNightTemp, weightedAveragePositive, generateVeer, randomizeDayTemperature, randomizeNightTemperature, randomizeCloudCover, randomizeHumidity };

export function generateDayTemp(day, climate) {
    return day.dayTemp - (day.cloudCover * climate.cloudIntensity);
}

export function generateNightTemp(day, climate) {
    return day.nightTemp + (day.cloudCover * climate.cloudIntensity);
}

//TODO retool this to be more generic so can be used for all sorts of things like rain
//and variable-length arrays
export function weightedAveragePositive(values) {
    console.log(values);
    return values[2] * .5 + values[1] * .25 + values[0] * .25;
}

//TODO wind veer
export function generateVeer(values) {
    return weightedAveragePositive(values);
}

export function randomizePrecipAmount(threeDay, climate, day) {
    return threeDay.precipAmount;
}

export function randomizeHumidity(threeDay, climate, day) {
    const vari = climate.precipVariability;
    const humidity = (climate.avgHumidity * (1 - vari) + threeDay.humidity * vari) + climate.humRange * randomUnit() - (threeDay.precipAmount * climate.precipDraw/100);
    if (humidity > climate.highestHumidity) {
        return climate.highestHumidity;
    }
    if (humidity < climate.lowestHumidity) {
        return climate.lowestHumidity;
    }
    return humidity;
}

export function randomizeDayTemperature(threeDay, climate, day) {
    const vari = climate.tempVariability;
    return (climate.avgTemp * (1 - vari) + threeDay.dayTemp * vari) + climate.avgDayNightSkew * randomPositiveUnit()/2 + climate.tempRange * randomUnit();
}

/**
 * Night temperature takes current day temp into account 
 * //TODO this needs tweaking
 * @param {*} threeDay 
 * @param {*} climate 
 * @param {*} day 
 */
export function randomizeNightTemperature(threeDay, climate, day) {
    const vari = climate.tempVariability;
    return (threeDay.nightTemp * 0.5 + day.dayTemp * 0.5) - climate.avgDayNightSkew * randomPositiveUnit()/2 + climate.tempRange * randomHalfUnit();
}

export function randomizeCloudCover(threeDay, climate, day) {
    return threeDay.cloudCover; //TODO
}