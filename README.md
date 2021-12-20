# Toy Robot

<!-- ABOUT THE PROJECT -->

## About The Project

      Toy Robot is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units.

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- npm

  ```sh
  npm install npm@latest -g
  ```

- node.js
  install node.js https://nodejs.org/en/download/

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/LukeGu/toy-robot.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<!-- USAGE EXAMPLES -->

## Usage

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

### Executing program

run this application

```sh
npm start
```

run test units

```sh
npm test
```
