import { gameState, levelOptions } from '../app.js';
import { LevelOptions } from '../interfaces.js';
import { clearBoard } from '../render/clearBoard.js';
import { render } from '../render/render.js';
import { renderRemainingFlags } from '../render/renderRemainingFlags.js';
import { initGame } from './initGame.js';
export const initLevelSelector = () => {
  const levelSelector = document.querySelector(
    '.level-selector'
  ) as HTMLSelectElement;
  levelSelector.addEventListener('change', (e: Event) => {
    if (gameState.gameStarted) {
      gameState.gameStarted = false;
    }
    gameState.level = levelSelector.value;
    gameState.numOfFlagsLeft =
      levelOptions[gameState.level as keyof LevelOptions].numOfMines;
    gameState.gameFieldsMap = [];
    clearBoard();
    initGame();
    renderRemainingFlags(gameState.numOfFlagsLeft);
  });
};
