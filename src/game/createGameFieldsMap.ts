import { setMinesPosition } from '../setMines/setMinesPosition.js';
import { setFieldsNumber } from '../setNumbers/setFieldsNumber.js';
import { Options, Field, GameFieldMap } from '../interfaces';

export const createGameFieldsMap = (
  options: Options,
  gameField: Array<Array<Field>>
): GameFieldMap => {
  gameField = setMinesPosition(options, gameField);

  gameField = setFieldsNumber(options, gameField);

  return gameField;
};
