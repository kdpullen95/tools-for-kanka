import { getCalendars } from './modules/APIWrapper.js';
import { Day } from './modules/Day.js';
import { DaysGenerator } from './modules/DaysGenerator.js';
import { ClimateModel } from './modules/ClimateModel.js';
import { Climate } from './modules/Climate.js';

document.addEventListener("DOMContentLoaded", () =>  {
    console.log("~~DOM initialized.");
});

const daysGenerator = new DaysGenerator();

const container = new Vue({
    el: '#vue-activator',
    data: {
      cal: [],
      apiToken: '',
      campaignID: '',
      activeCal: null,
      numToGenerate: 0,
      startingAtOffset: 0,
      days: [],
    },
    methods: {
        generateWeather() {
            console.log("weathergenrus");
            const tArr = [];
            for(let i = 0; i < this.numToGenerate; i++) {
                tArr.push( new Day('date', 'season') );
            }
            const climateModel = new ClimateModel(45, 155);
            climateModel.addClimate(new Climate(), 200);
            this.days = daysGenerator.init(climateModel, tArr).generate();
        },
        getCal() {
            this.activeCal = null;
            getCalendars(this.apiToken, this.campaignID).then( response => {
                this.cal = response.data;
            });
        },
        stringify(obj) {
            return JSON.stringify(obj);
        }
    }
});