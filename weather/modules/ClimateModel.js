const defaultPick = 'temperate';

const defaults = {
    
};

export class ClimateData {

    climate = [];
    smoothing = 1;

    constructor () {

    }

    addClimate(climate, length) {
        climate.push( { climate: climate, len: length } );
    }

    setSmoothing(x) {
        this.smoothing = x;
    }

    isMultiClimateModel() {
        return this.climate.lenngth > 1;
    }

    interpolate(day) {
        //uses the two closest climates (the one it's in, plus the one on the nearer edge) and the smoothing value to create a new climate with desired values
    }

}