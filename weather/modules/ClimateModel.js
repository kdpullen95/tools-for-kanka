export class ClimateModel {

    climates = [];
    //how fast it transitions between the two
    smoothing = 1;

    constructor () {

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

    /**
     * Given a day (counted from day 0 of the first climate), create a climate that
     * is a combination of the current climate and nearer-edge climate to allow
     * smooth climate transitions
     * @param {Int} day 
     */
    interpolate(day) {
        if (this.climates.length === 0) return null; 
        if (this.climates.length === 1) return this.climates[0].climate;
        let climate;
        //uses the two closest climates (the one it's in, plus the one on the nearer edge) and the smoothing value to create a new climate with desired values
        //TODO
        return climate;
    }

    /**
     * Deserialization
     * Converts from Object to classes so class functions can be used
     * @param {Object} values 
     */
    withValues(values) {
        if (Array.isArray(values.climates)) {
            values.climates.map( (climate) => { 
                return { climate: new Climate().withValues(climate), len: climate.len }; 
            });
        }
        return {...this, ...values };
    }

}