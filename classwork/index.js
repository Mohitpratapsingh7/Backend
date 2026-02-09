// const sum = require("./cal.js");

// import {sum,sub} from "./cal.js";
// //console.log(cal.sum(1,2))

// console.log(sum(2,3));

//import chalk from 'chalk';

// const log = console.log;

// log(chalk.blue('Hello') + ' World' + chalk.red('!'));

const fs = require("fs");
fs.writeFile("log.txt","bye bye", {flag:"a" }, (err) => {
    err && console.log(err);
})

