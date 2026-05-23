// FOOTER DATA
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// STATIC WEATHER DATA
const temp = 34;   // °C
const wind = 8;    // km/h

// WIND CHILL FUNCTION (single-expression return)
function calculateWindChill(t, s) {
  return (13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16));
}

// CONDITIONS (metric system)
let windChill = "N/A";

if (temp <= 10 && wind > 4.8) {
  windChill = calculateWindChill(temp, wind).toFixed(1) + " °C";
}

// OUTPUT
document.getElementById("windchill").textContent = windChill;