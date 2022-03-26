import { gameState, levelOptions } from '../app.js';
export const resetState = () => {
    gameState.gameStarted = false;
    gameState.timer = 0;
    gameState.numOfFlagsLeft =
        levelOptions[gameState.level].numOfMines;
    gameState.gameFieldsMap = [];
};
