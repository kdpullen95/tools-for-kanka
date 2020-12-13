import { Effect } from './Effect.js';

export class Climate {
    //temperature variability between days
    tempVariability = 0.5;
    //precipitation variability between days
    precipVariability = 0.5;
    //temperature range of variability
    tempRange = 1;
    //precip range of variability
    precipRange = 1;
    //humidity range
    humRange = 0.3;
    highestHumidity = 0.85;
    lowestHumidity = 0.15;
    //wind intensity
    windIntensity = 1;
    //wind variability between days
    windVariability = 1;
    //what direction the wind tends to come from
    windPrevailing = 120;
    //how 'sticky' the wind is to the prevailing direction. 0 is none.
    windDraw = 1;
    //average temp (c)
    avgTemp = 14.6;
    //average Day/Night temperature skew (c), in offset from median
    avgDayNightSkew = 4;
    //average precipitation (tbd)
    avgPrecip = 25;
    //chance of daily precip. This is the starting value that's modified based on continuity (previous rainy days + previous cloudy days)
    dailyPrecipChance = 0.2;
    //how 'sticky' precipitation is - positive values cause rain to appear in clumps, while negative values incentivize single-day intense rainstorms
    precipDraw = 1;
    //chance of daily cloudiness. This influences clouds on a scale (partly cloudy, full cover). Modified by continuity (previous rainy/cloudy days)
    //a day will always be cloudy if it's precip, but a value of zero here will mean ONLY precip days are cloudy
    dailyCloudChance = 0.4;
    //cloud intensity, how "thick" and "dark" clouds tend to be
    cloudIntensity = 1.3;
    //how 'sticky' cloudiness is - like precipDraw
    cloudDraw = 1;
    //relative humidity!! Not absolute 
    avgHumidity = 0.6;
    //array of effects. a day will call the trigger function to determine if it has the effect
    effects = [];

    constructor () {}

    //mainly used to convert from JSON
    withValues(values) {
        if (Array.isArray(values.effects)) {
            values.effects.map( (effect) => new Effect().withValues(effect) );
        }
        return { ...this, ...values };
    }

}