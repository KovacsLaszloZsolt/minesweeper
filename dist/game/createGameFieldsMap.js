import { setMinesPosition } from '../setMines/setMinesPosition.js';
import { setFieldsNumber } from '../setNumbers/setFieldsNumber.js';
export const createGameFieldsMap = (options, gameField) => {
    gameField = setMinesPosition(options, gameField);
    gameField = setFieldsNumber(options, gameField);
    return gameField;
};
