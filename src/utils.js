const { errorLog } = require('./logs');
const { directions } = require('../static-data');

function isPlaced(x, y, f) {
  if (
    x !== null &&
    x >= 0 &&
    x <= 4 &&
    y !== null &&
    y >= 0 &&
    y <= 4 &&
    f !== null &&
    directions.indexOf(f.toLowerCase()) !== -1
  )
    return true;
  errorLog('Please PLACE the robot first.');
  return false;
}

function isValidNum(val) {
  if (Number.isInteger(val) && val >= 0 && val < 5) return true;
  return false;
}

module.exports = {
  isPlaced,
  isValidNum,
};
