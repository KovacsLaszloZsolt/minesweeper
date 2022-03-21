import { GameFieldMap, Options } from '../interfaces.js';
import { getNumOfMines } from './getNumOfMines.js';
import { randomRowIndex } from './randomRowIndex.js';
import { setMines } from './setMines.js';

export const setMinesPosition = (
  options: Options,
  gameField: GameFieldMap
): GameFieldMap => {
  let remamingNumOfMines = options.numOfMines;
  gameField = [...new Array(options.mapHeight)];

  while (remamingNumOfMines! > 0) {
    const maxMinesInRow = options.mapWidth! / 2;
    const minesNumberInRow = getNumOfMines(maxMinesInRow, remamingNumOfMines!);
    const rowIndex = randomRowIndex(gameField);

    gameField[rowIndex] = [...new Array(options.mapWidth)].map((item) => ({
      fieldValue: null,
      isOpen: false,
      isFlaged: false,
    }));

    gameField[rowIndex] = setMines(gameField[rowIndex], minesNumberInRow);

    remamingNumOfMines = remamingNumOfMines! - minesNumberInRow;
  }

  gameField = gameField.map((row) =>
    !row
      ? [...new Array(options.mapWidth)].map((item) => ({
          fieldValue: null,
          isOpen: false,
          isFlaged: false,
        }))
      : row
  );
  return gameField;
};
