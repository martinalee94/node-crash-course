// console.log(global);
global.setTimeout(() => {
    console.log("in the timeout!")
}, 3000);

// Still works without global
setTimeout(() => {
    console.log("in the timeout!")
    clearInterval(int)
}, 3000);

// Ongoing
const int = setInterval(() => {
    console.log('in the interval');
}, 1000)

console.log(__dirname);
console.log(__filename);