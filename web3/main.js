// console.log("js assessment");

// Global variable
const prompt = require("prompt-sync")({ sigint: true });
const clear = require("clear-screen");

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";
const row = 10;
const col = 10;

// Class: Field with constructor
class Field {
  constructor(field = [[]]) {
    this.field = field;

    // starting position
    this.start = {
      x: 0,
      y: 0,
    };
    // hat starting position
    this.hatPos = {
      x: 0,
      y: 0,
    };

    // initial user location
    this.locationX = 0;
    this.locationY = 0;
  } // end of constructor

  // method: randomPosition()
  randomPosition(offLimit = { x: 0, y: 0 }) {
    const pos = {
      x: 0,
      y: 0,
    };
    if (pos.x === offLimit.x && pos.y === offLimit.y) {
      pos.x = Math.floor(Math.random() * this.field[0].length); // position x random
      pos.y = Math.floor(Math.random() * this.field.length); // position y random
    }
    return pos;
  } // end of method: randomPosition

  // method: setStart()
  setStart() {
    this.start = { x: 0, y: 0 }; // set starting position at 0,0
    this.locationX = this.start.x;
    this.locationY = this.start.y;
    this.field[this.start.y][this.start.x] = pathCharacter;
  }

  // method setHat()
  setHat() {
    this.hatPos = this.randomPosition(this.start);
    this.field[this.hatPos.y][this.hatPos.x] = hat;
  }

  // method: runGame
  runGame() {
    // set starting position
    this.setStart();

    // set hat location
    this.setHat();

    let playing = true;
    while (playing) {
      this.print();
      this.getInput();

      if (!this.isInBounds()) {
        console.log("Out of bounds");
        playing = false;
        break;
      } else if (this.isHole()) {
        console.log("fell down hole.");
        playing = false;
        break;
      } else if (this.isHat()) {
        console.log("found hat");
        playing = false;
        break;
      }

      // update current location on map
      this.field[this.locationY][this.locationX] = pathCharacter;
    }
  } // end of method: runGame

  // method: print()
  print() {
    clear();
    this.field.forEach((element) => console.log(element.join("")));
  }
  // end of method: print()

  // method: getInput()
  getInput() {
    const input = prompt("Which way? ").toUpperCase();
    switch (input) {
      case "U":
        this.locationY -= 1; // up = -y
        break;
      case "D":
        this.locationY += 1; // down = +y
        break;
      case "L":
        this.locationX -= 1; // left = -x
        break;
      case "R":
        this.locationX += 1; // right = +x
        break;
      default:
        console.log("Enter U, D, L or R.");
        this.getInput();
        break;
    }
  }
  // end of method: getInput()

  // method: isInBounds
  isInBounds() {
    return (
      this.locationY >= 0 &&
      this.locationX >= 0 &&
      this.locationY < this.field.length &&
      this.locationX < this.field[0].length
    );
  }
  // end of method: isInBounds

  // method: isHat
  isHat() {
    return this.field[this.locationY][this.locationX] === hat;
  } // end of method: isHat

  // method: isHole
  isHole() {
    return this.field[this.locationY][this.locationX] === hole;
  } // end of method: isHole

  // method: addHoles
  addHoles() {
    const numHoles = Math.floor(Math.random() * 3) + 1; // random number of holes
    for (let i = 1; i <= numHoles; i++) {
      let holePos = {
        x: 0,
        y: 0,
      };
      while (holePos.x === this.locationX && holePos.y === this.locationY) {
        holePos = this.randomPosition(this.hatPos);
      }
      this.field[holePos.y][holePos.x] = hole;
    }
  } // end of method: addHoles

  // method: generateField
  static generateField(row, col, percentage) {
    const field = new Array(row).fill(0).map((element) => new Array(col));
    for (let y = 0; y < row; y++) {
      for (let x = 0; x < col; x++) {
        const prob = Math.random();
        field[y][x] = prob > percentage ? fieldCharacter : hole;
      }
    }
    return field;
  } // end of method: generateField
} // End of class: Field

const myField = new Field(Field.generateField(row, col, 0.2));
myField.runGame();
