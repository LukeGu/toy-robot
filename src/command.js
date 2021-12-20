const prompt = require('./prompt');
const usage = require('./usage');
const { errorLog } = require('./logs');
const { isPlaced } = require('./utils');
const {
  placeRobot,
  moveRobot,
  rotateRobot,
  report,
} = require('./robot-functions');

function command(x, y, f) {
  const q = "What's your next step?\n";
  prompt(q).then((cmd) => {
    var cmdArr = cmd.split(/(\s+)/).filter((word) => word !== ' ');

    switch (cmdArr[0].toLowerCase()) {
      case 'help':
        usage();
        break;
      case 'place':
        if (cmdArr.length === 4) {
          const result = placeRobot(cmdArr[1], cmdArr[2], cmdArr[3]);
          if (!!result) {
            x = result.x;
            y = result.y;
            f = result.f;
          }
        } else {
          errorLog('Place input X, Y, and F.');
          usage();
        }
        break;
      case 'move':
        if (isPlaced(x, y, f)) {
          const result = moveRobot(x, y, f);
          if (!!result) {
            x = result.x;
            y = result.y;
            f = result.f;
          }
        }
        break;
      case 'left':
        if (isPlaced(x, y, f)) {
          f = rotateRobot(f);
        }
        break;
      case 'right':
        if (isPlaced(x, y, f)) {
          f = rotateRobot(f, true);
        }
        break;
      case 'report':
        if (isPlaced(x, y, f)) {
          report(x, y, f);
        }
        break;
      case 'exit':
        return;
      default:
        errorLog('invalid command passed');
        usage();
    }
    command(x, y, f);
  });
}

module.exports = command;
