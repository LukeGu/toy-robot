const { errorLog, yellowLog } = require('./logs');
const { isValidNum } = require('./utils');
const { directions } = require('../static-data');

function placeRobot(x, y, f) {
  let finalX = null,
    finalY = null,
    finalF = null;
  const numX = Number(x);
  const numY = Number(y);
  const lowF = f.toLowerCase();

  if (isValidNum(numX)) {
    finalX = numX;
  } else {
    errorLog(
      `X must be a number and value range is 0 to 4. Your input is ${numX}.`
    );
  }
  if (isValidNum(numY)) {
    finalY = numY;
  } else {
    errorLog(
      `Y must be a number and value range is 0 to 4. Your input is ${numY}.`
    );
  }
  if (directions.indexOf(lowF) === -1) {
    errorLog(
      'Invalid moving direction. Facing direction includes NORTH, SOUTH, EAST and WEST.'
    );
  } else {
    finalF = lowF;
  }

  if (finalX !== null && finalY !== null && finalF !== null) {
    return {
      x: finalX,
      y: finalY,
      f: finalF,
    };
  }
  return false;
}

function moveRobot(x, y, f) {
  let isMoved = false;
  switch (f) {
    case 'north':
      if (isValidNum(y) && y + 1 <= 4) {
        isMoved = true;
        y++;
      }
      break;
    case 'south':
      if (isValidNum(y) && y - 1 >= 0) {
        isMoved = true;
        y--;
      }
      break;
    case 'west':
      if (isValidNum(x) && x - 1 >= 0) {
        isMoved = true;
        x--;
      }
      break;
    case 'east':
      if (isValidNum(x) && x + 1 <= 4) {
        isMoved = true;
        x++;
      }
      break;
    default:
      errorLog('Invalid direction.');
      break;
  }
  if (isMoved) {
    yellowLog(`The robot moves one step ${f}.`);
    return {
      x,
      y,
      f,
    };
  } else {
    errorLog('The robot is going to fall off the table.');
    return false;
  }
}

function rotateRobot(f, isClockwised = false) {
  let index = directions.indexOf(f.toLowerCase());
  if (index === -1) {
    errorLog('Invalid facing direction.');
    return false;
  } else {
    index = isClockwised ? index + 1 : index - 1;
    if (index === -1) {
      index = 3;
    }
    if (index === 4) {
      index = 0;
    }
    return directions[index];
  }
}

function report(x, y, f) {
  yellowLog(
    `The coordinates of the toy robot is [${x}, ${y}] and facing ${f.toUpperCase()}.`
  );
}

module.exports = {
  placeRobot,
  moveRobot,
  rotateRobot,
  report,
};
