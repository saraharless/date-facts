const chalk = require('chalk');
const moment = require('moment');
// moment().format();
let now = moment().format('dddd MMM DD, YYYY h:m:s');
let today = moment().format('DDDD');
let secs = moment().format('ssss');
let dayst = moment().isDST();

let dstcheck =


console.log('ghost toast');
console.log('it is ' + now);
console.log(chalk.blue('boo'));

console.log('it is ' + chalk.blue(now));
console.log('it is the ' + chalk.magenta(today) + ' day of the year');
console.log('it is ' + chalk.cyan(secs) + ' seconds into the day');
console.log('it ' + chalk.green(dayst) + ' Daylight Savings Time');
