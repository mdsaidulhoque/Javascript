const weather = {

    City: "Chittagong",

    Tempearture: "25 °C",

    Humidity: "84%",

    Forecast: ["28 °C","25 °C","25 °C","28 °C","28 °C","29 °C","28 °C"]
}

const weatherJSON = JSON.stringify(weather);

console.log(weatherJSON);