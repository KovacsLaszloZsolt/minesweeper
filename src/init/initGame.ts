import { gameState, levelOptions } from '../app.js';
import { createGameFieldsMap } from '../game/createGameFieldsMap.js';
import { LevelOptions } from '../interfaces';
import { render } from '../render/render.js';
import { renderRemainingFlags } from '../render/renderRemainingFlags.js';
export const initGame = () => {
  const level: string = gameState.level;
  gameState.gameFieldsMap = createGameFieldsMap(
    levelOptions[level as keyof LevelOptions],
    gameState.gameFieldsMap
  );
  render();
  renderRemainingFlags(gameState.numOfFlagsLeft);
};
