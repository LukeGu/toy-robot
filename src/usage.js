const { blueLog } = require('./logs');

// usage represents the help guide
function usage() {
  const usageText = `
      Toy Robot is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units.
    
      usage:
        <command>
    
        commands can be (commands are not case sensitive):
  
        HELP:        used to explain all commands
        EXIT:        used to exit the app
    
        PLACE X,Y,F: used to put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST
        MOVE:        used to move the toy robot one unit forward in the direction it is currently facing
        LEFT:        used to rotate the robot 90 degrees counterclockwise without changing the position of the robot
        RIGHT:       used to rotate the robot 90 degrees clockwise without changing the position of the robot
        REPORT:      used to announce the X,Y and F of the robot
      `;

  blueLog(usageText);
}

module.exports = usage;
