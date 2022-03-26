import { initGame } from './init/initGame.js';
import { initLevelSelector } from './init/initLevelSelector.js';
import { setLevelOptions } from './init/setLevelOptions.js';
import { getDeviceType } from './init/getDeviceType.js';
import { render } from './render/render.js';
import {
  GameState,
  LevelOptions,
  Icons,
  IconsObj,
  Levels,
} from './interfaces.js';

export const levelOptions: LevelOptions = {
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
export const gameState: GameState = {
  deviceType: getDeviceType(),
  level: Levels.easy,
  gameStarted: false,
  isGameOver: false,
  gameFieldsMap: [],
  numOfFlagsLeft: 0,
  timer: 0,
};

gameState.numOfFlagsLeft =
  levelOptions[gameState.level as keyof LevelOptions].numOfMines;

export const icons: IconsObj = {
  flag: Icons.flag,
  mine: Icons.mine,
};

initLevelSelector();
initGame();
render();
