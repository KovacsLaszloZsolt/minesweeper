import { gameState, levelOptions } from '../app.js';
import { createGameFieldsMap } from '../game/createGameFieldsMap.js';
import { LevelOptions } from '../interfaces';
import { render } from '../render/render.js';
export const initGame = () => {
  const level: string = gameState.level;
  console.log(levelOptions[level as keyof LevelOptions]);
  gameState.gameFieldsMap = createGameFieldsMap(
    levelOptions[level as keyof LevelOptions],
    gameState.gameFieldsMap
  );
  render();
};
