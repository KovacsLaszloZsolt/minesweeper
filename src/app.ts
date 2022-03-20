import { createGameFieldsMap } from './createGameFieldsMap.js';
import {
  Field,
  GameState,
  LevelOptions,
  Icons,
  IconsObj,
} from './interfaces.js';
import { render } from './render/render.js';

export const gameState: GameState = {
  level: 'easy',
  gameStarted: false,
  isGameOver: false,
  gameFieldsMap: [],
};

export const icons: IconsObj = {
  flag: Icons.flag,
  mine: Icons.mine,
};

const levelOptions: LevelOptions = {
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

const initGame = () => {
  const level: string = gameState.level;
  gameState.gameFieldsMap = createGameFieldsMap(
    levelOptions[level as keyof LevelOptions],
    gameState.gameFieldsMap
  );

  render();
};

initGame();
