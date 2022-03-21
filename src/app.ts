import { initGame } from './init/initGame.js';
import { initLevelSelector } from './init/initLevelSelector.js';
import {
  GameState,
  LevelOptions,
  Icons,
  IconsObj,
  Levels,
} from './interfaces.js';

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
