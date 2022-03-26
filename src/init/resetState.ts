import { gameState, levelOptions } from '../app.js';
import { LevelOptions } from '../interfaces';

export const resetState = () => {
  gameState.gameStarted = false;
  gameState.timer = 0;
  gameState.numOfFlagsLeft =
    levelOptions[gameState.level as keyof LevelOptions].numOfMines;
  gameState.gameFieldsMap = [];
};
