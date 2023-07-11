// import everything
// ex. import datetime
const xyz = require('./people');

// import specific thing
// ex. from datetime import date
const { people } = require('./people'); // import 

console.log(xyz);
console.log(xyz.ages);
console.log(xyz.people);
console.log(people)


const os = require('os');
console.log(os);