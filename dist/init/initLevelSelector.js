import { gameState } from '../app.js';
import { render } from '../render/render.js';
import { initGame } from './initGame.js';
import { resetState } from './resetState.js';
export const initLevelSelector = () => {
    const levelSelector = document.querySelector('.level-selector');
    levelSelector.addEventListener('change', (e) => {
        if (gameState.gameStarted) {
            gameState.gameStarted = false;
        }
        gameState.level = levelSelector.value;
        resetState();
        initGame();
        render();
    });
};
