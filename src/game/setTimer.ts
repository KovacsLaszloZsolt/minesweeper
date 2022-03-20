import { gameState } from '../app.js';
import { renderTimer } from '../render/renderTimer.js';
export const setTimer = async () => {
  const timer = document.querySelector('.timer') as HTMLSpanElement;

  setInterval(() => {
    gameState.timer++;
    renderTimer(timer);
  }, 1000);
};
