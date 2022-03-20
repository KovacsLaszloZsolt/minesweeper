import { gameState } from '../app.js';
import { clearBoard } from '../render/clearBoard.js';
import { render } from '../render/render.js';
import { initGame } from './initGame.js';
export const initLevelSelector = () => {
  const levelSelector = document.querySelector(
    '.level-selector'
  ) as HTMLSelectElement;
  levelSelector.addEventListener('change', (e: Event) => {
    gameState.level = levelSelector.value;
    console.log(levelSelector.value);
    console.log(gameState.level);
    gameState.gameFieldsMap = [];
    clearBoard();
    initGame();
  });
};
