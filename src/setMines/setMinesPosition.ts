import { GameFieldMap, Options } from '../interfaces.js';
import { setMinesPos } from './setMinesPos.js';

export const setMinesPosition = (
  options: Options,
  gameField: GameFieldMap
): GameFieldMap => {
  gameField = [...new Array(options.mapHeight)].map((row) =>
    [...new Array(options.mapWidth)].map((field) => ({
      fieldValue: null,
      isOpen: false,
      isFlaged: false,
    }))
  );

  for (let i = 0; i < options.numOfMines; i++) {
    setMinesPos(options, gameField);
  }
  return gameField;
};
