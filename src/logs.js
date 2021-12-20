const chalk = require('cli-color');

// used to log errors to the console in red color
function errorLog(error) {
  const eLog = chalk.red(error);
  console.log(eLog);
}

// used to log normal information to the console
function infoLog(info) {
  console.log(info);
}

// used to log text to the console in blue color
function blueLog(info) {
  const newLog = chalk.blue(info);
  console.log(newLog);
}

// used to log text to the console in yellow color
function yellowLog(info) {
  const newLog = chalk.yellow(info);
  console.log(newLog);
}

module.exports = {
  errorLog,
  infoLog,
  blueLog,
  yellowLog,
};
