import { gameState } from '../app.js';
import { render } from '../render/render.js';
import { renderTimer } from '../render/renderTimer.js';
import { initGame } from './initGame.js';
import { resetState } from './resetState.js';
export const initLevelSelector = () => {
  const levelSelector = document.querySelector(
    '.level-selector'
  ) as HTMLSelectElement;
  levelSelector.addEventListener('change', (e: Event) => {
    if (gameState.gameStarted) {
      gameState.gameStarted = false;
    }

    gameState.level = levelSelector.value;
    resetState();
    initGame();
    render();
  });
};
