const { isPlaced, isValidNum } = require('../src/utils');

test('the robot has been placed', () => {
  expect(isPlaced(1, 2, 'east')).toBeTruthy();
});

test('the robot is not placed with invalid X', () => {
  expect(isPlaced(null, 2, 'east')).toBeFalsy();
  expect(isPlaced(-1, 2, 'east')).toBeFalsy();
  expect(isPlaced(6, 2, 'east')).toBeFalsy();
});

test('the robot is not placed with invalid Y', () => {
  expect(isPlaced(1, null, 'east')).toBeFalsy();
  expect(isPlaced(1, -1, 'east')).toBeFalsy();
  expect(isPlaced(1, 6, 'east')).toBeFalsy();
});

test('the robot is not placed with invalid facing direction', () => {
  expect(isPlaced(1, 1, null)).toBeFalsy();
  expect(isPlaced(1, 1, 'eee')).toBeFalsy();
});

test('the input value is valid', () => {
  expect(isValidNum(1)).toBeTruthy();
});

test('the input value is invalid', () => {
  expect(isValidNum(-1)).toBeFalsy();
  expect(isValidNum(6)).toBeFalsy();
  expect(isValidNum('1')).toBeFalsy();
});
