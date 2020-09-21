import { getCalendars } from './modules/apiWrapper.js';

document.addEventListener("DOMContentLoaded", () =>  {
    console.log("~~DOM initialized.");
});

const container = new Vue({
    el: '#vue-activator',
    data: {
      cal: [],
      apiToken: '',
      campaignID: ''
    },
    methods: {
        getCal() {
            getCalendars(this.apiToken, this.campaignID).then( response => {
                this.cal = response.data;
            });
        },
        openCal(calendar) {
            console.log('open cal');
            console.log(calendar);
        },
        stringify(obj) {
            return JSON.stringify(obj);
        }
    }
});