"use strict";

// =========================
// FOOTER DATA
// =========================
const yearEl = document.getElementById("year");
const lastModifiedEl = document.getElementById("lastModified");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (lastModifiedEl) {
  lastModifiedEl.textContent = document.lastModified;
}

// =========================
// STATIC WEATHER DATA
// =========================
const temp = 34;   // °C
const wind = 8;    // km/h

// =========================
// WIND CHILL FUNCTION
// Metric formula (NOAA style adaptation)
// =========================
function calculateWindChill(t, s) {
  return (
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(s, 0.16) +
    0.3965 * t * Math.pow(s, 0.16)
  );
}

// =========================
// WIND CHILL LOGIC
// =========================
let windChill = "N/A";

if (temp <= 10 && wind > 4.8) {
  const result = calculateWindChill(temp, wind);
  windChill = `${result.toFixed(1)} °C`;
}

// =========================
// OUTPUT TO DOM
// =========================
const windChillEl = document.getElementById("windchill");

if (windChillEl) {
  windChillEl.textContent = windChill;
}