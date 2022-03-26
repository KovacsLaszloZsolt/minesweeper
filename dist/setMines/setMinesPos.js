import { randomNumber } from '../setMines/randomNumber.js';
export const setMinesPos = (options, gameField) => {
    const rowIndex = randomNumber(options.mapHeight) - 1;
    const index = randomNumber(options.mapWidth) - 1;
    if (gameField[rowIndex][index].fieldValue) {
        return setMinesPos(options, gameField);
    }
    gameField[rowIndex][index].fieldValue = 'mine';
};
