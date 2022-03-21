import { gameState } from '../app.js';
import { renderTimer } from '../render/renderTimer.js';
export const setTimer = async () => {
  const timerSpan = document.querySelector('.timer') as HTMLSpanElement;

  const timer = setInterval(() => {
    gameState.timer++;
    if (!gameState.gameStarted) {
      clearInterval(timer);
      gameState.timer = 0;
    }
    renderTimer(timerSpan);
  }, 1000);
};
