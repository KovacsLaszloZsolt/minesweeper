import { gameState } from '../app.js';
import { renderTimer } from '../render/renderTimer.js';
export const setTimer = async () => {
    const timer = setInterval(() => {
        ++gameState.timer;
        if (!gameState.gameStarted) {
            clearInterval(timer);
        }
        renderTimer();
    }, 1000);
};
