// unused removed later: helper examples are not imported anywhere in the app
const { faker } = require("@faker-js/faker");

// Indian context ke liye locale set karo
faker.locale = "en_IN";

// To generate Random date
function getFakeDate() {
  return faker.date.recent(); // Date object milega
}

// To generate Specific range in date (e.g. for dob )
function getFakeDOB(minAge = 18, maxAge = 60) {
  return faker.date.birthdate({ min: minAge, max: maxAge, mode: "age" });
}

//  DD/MM/YYYY in format  — India standard
function formatIndianDate(date) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

//  Past date (e.g. joining date, transaction date)
function getFakePastDate(yearsBack = 5) {
  return faker.date.past(yearsBack);
}

// Future date (e.g. expiry, deadline)
function getFakeFutureDate(yearsAhead = 2) {
  return faker.date.future(yearsAhead);
}

//  Between two specific dates
function getFakeDateBetween(from, to) {
  return faker.date.between({
    from: new Date(from),
    to: new Date(to),
  });
}

// console.log("Recent Date       :", formatIndianDate(getFakeDate())); // unused removed later
// console.log("DOB (18-60 yrs)   :", formatIndianDate(getFakeDOB())); // unused removed later
// console.log("Past Date         :", formatIndianDate(getFakePastDate(3))); // unused removed later
// console.log("Future Date       :", formatIndianDate(getFakeFutureDate(1))); // unused removed later
// console.log( // unused removed later
//   "Between Range     :",
//   formatIndianDate(getFakeDateBetween("2020-01-01", "2024-12-31")),
// );
