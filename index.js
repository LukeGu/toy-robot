#!/usr/bin/env node

const command = require('./src/command');
const { infoLog, yellowLog } = require('./src/logs');

function runApp() {
  infoLog('App is running.');
  yellowLog(
    `Please start with PLACE command to place the robot on the table. 
For example, PLACE 0 0 NORTH
  `
  );
  const x = null,
    y = null,
    f = null;
  command(x, y, f);
}

runApp();
