function internalFetch(url, token, campaignID) {
    return fetch(`https://kanka.io/api/1.0/campaigns/${campaignID}/${url}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-type': 'application/json'
        }
    }).then(response => {
        return response.json();
    });
}

export function getCalendars(apiToken, campaignID) {
    return internalFetch('calendars', apiToken, campaignID);
}

export function getWeather(apiToken, campaignID, calendarID) {
    return internalFetch(`calendars/${calendarID}/calendar_weathers`, apiToken, campaignID);
}

export function addWeather(apiToken, campaignID, calendarID, weatherObj) {
    //TODO
}

export function updateWeather(apiToken, campaignID, calendarID, weatherObj) {
    //TODO
}

export function deleteWeather(apiToken, campaignID, calendarID, weatherObj) {
    //TODO
}