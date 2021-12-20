const {
  placeRobot,
  moveRobot,
  rotateRobot,
} = require('../src/robot-functions');

test('successfully place a robot', () => {
  expect(placeRobot(1, 2, 'east')).toMatchObject({ x: 1, y: 2, f: 'east' });
});

test('unsuccessfully place a robot', () => {
  expect(placeRobot(-1, 2, 'east')).toBeFalsy();
});

test('successfully move the robot', () => {
  expect(moveRobot(1, 2, 'east')).toMatchObject({ x: 2, y: 2, f: 'east' });
});

test('unsuccessfully move the robot', () => {
  expect(moveRobot(-1, 2, 'east')).toBeFalsy();
});

test('successfully rotate the robot', () => {
  expect(rotateRobot('east')).toBe('north');
  expect(rotateRobot('east', true)).toBe('south');
});

test('unsuccessfully rotate the robot', () => {
  expect(rotateRobot('northeast')).toBeFalsy();
});
