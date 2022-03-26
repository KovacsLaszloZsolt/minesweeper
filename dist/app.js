import { initGame } from './init/initGame.js';
import { initLevelSelector } from './init/initLevelSelector.js';
import { setLevelOptions } from './init/setLevelOptions.js';
import { getDeviceType } from './init/getDeviceType.js';
import { render } from './render/render.js';
import { Icons, Levels, } from './interfaces.js';
export const levelOptions = {
    easy: {
        maxNumOfFields: 100,
        maxFieldsInRow: 10,
        numOfMines: 10,
    },
    medium: {
        maxNumOfFields: 400,
        maxFieldsInRow: 20,
        numOfMines: 40,
    },
    hard: {
        maxNumOfFields: 900,
        maxFieldsInRow: 30,
        numOfMines: 100,
    },
};
setLevelOptions();
export const gameState = {
    deviceType: getDeviceType(),
    level: Levels.easy,
    gameStarted: false,
    isGameOver: false,
    gameFieldsMap: [],
    numOfFlagsLeft: 0,
    timer: 0,
};
gameState.numOfFlagsLeft =
    levelOptions[gameState.level].numOfMines;
export const icons = {
    flag: Icons.flag,
    mine: Icons.mine,
};
initLevelSelector();
initGame();
render();
