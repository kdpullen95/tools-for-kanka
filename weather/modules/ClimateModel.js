export class ClimateModel {

    climates = [];
    smoothing = 1;

    constructor (warmestDay, coldestDay) {
        this.warmestDay = warmestDay;
        this.coldestDay = coldestDay;
    }

    addClimate(climate, length) {
        this.climates.push( { climate: climate, len: length } );
    }

    setSmoothing(x) {
        this.smoothing = x;
    }

    isMultiClimateModel() {
        return this.climates.length > 1;
    }

    interpolate(day) {
        if (this.climates.length === 0) return null; 
        let climate;
        //if single climate model, just uses that single climate
        if (this.climates.length === 1) {
            climate = { ... this.climates[0].climate };
        }
        if (this.climates.length > 1) {
            //uses the two closest climates (the one it's in, plus the one on the nearer edge) and the smoothing value to create a new climate with desired values
            //TODO
        }
        //also takes warmestDay/Coldestday into account
        return this.adjustForSeasonality(climate, day);
    }

    adjustForSeasonality(climate, day) {
        //adjusts the avgTemp, avgHumidity, etc values for the day of the year it's in
        //TODO
        return climate;
    }


    withValues(values) {
        if (Array.isArray(values.climates)) {
            values.climates.map( (climate) => { 
                return { climate: new Climate().withValues(climate), len: climate.len }; 
            });
        }
        return {...this, ...values };
    }

}