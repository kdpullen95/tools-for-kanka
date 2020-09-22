import { getCalendars } from './modules/APIWrapper.js';
import { Climate } from './modules/Climate.js';

const clima = new Climate().withValues({ hello: 'hello' });

document.addEventListener("DOMContentLoaded", () =>  {
    console.log("~~DOM initialized.");
});

const container = new Vue({
    el: '#vue-activator',
    data: {
      cal: [],
      apiToken: '',
      campaignID: '',
      activeCal: null
    },
    methods: {
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