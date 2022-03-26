import { gameState, levelOptions } from '../app.js';
import { createGameFieldsMap } from '../game/createGameFieldsMap.js';
export const initGame = () => {
    const level = gameState.level;
    gameState.gameFieldsMap = createGameFieldsMap(levelOptions[level], gameState.gameFieldsMap);
};
