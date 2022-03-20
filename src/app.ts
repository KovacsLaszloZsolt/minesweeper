import { initGame } from './init/initGame.js';
import { initLevelSelector } from './init/initLevelSelector.js';
import {
  GameState,
  LevelOptions,
  Icons,
  IconsObj,
  Levels,
} from './interfaces.js';
import { setTimer } from './game/setTimer.js';

export const levelOptions: LevelOptions = {
  easy: {
    fieldWidth: 10,
    fieldHeight: 10,
    numOfMines: 10,
  },
  medium: {
    fieldWidth: 20,
    fieldHeight: 20,
    numOfMines: 40,
  },
  hard: {
    fieldWidth: 30,
    fieldHeight: 30,
    numOfMines: 100,
  },
};

export const gameState: GameState = {
  level: Levels.easy,
  gameStarted: false,
  isGameOver: false,
  gameFieldsMap: [],
  numOfFlagsLeft: levelOptions[Levels.easy].numOfMines,
  timer: 0,
};

export const icons: IconsObj = {
  flag: Icons.flag,
  mine: Icons.mine,
};

initLevelSelector();
initGame();

setTimer();
