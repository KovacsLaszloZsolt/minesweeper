const levelOptions = {
  easy: {
    fieldWidth: 10,
    fieldHeight: 10,
    numOfMines: 10,
  },
  medium: {
    fieldWidth: 20,
    fieldHeight: 20,
    numOfMines: 40,
  },
  hard: {
    fieldWidth: 30,
    fieldHeight: 30,
    numOfMines: 100,
  },
};

const gameState = {
  level: 'easy',
  gameStarted: false,
  isGameOver: false,
  gameFieldsMap: [],
  timer: 0,
  numOfFlagsLeft: levelOptions[gameState.level].numOfMines,
};

console.log(gameState);
