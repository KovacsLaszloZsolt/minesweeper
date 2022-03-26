import { render } from '../render/render.js';
import { renderTimer } from '../render/renderTimer.js';
import { initGame } from './initGame.js';
import { resetState } from './resetState.js';
export const initPlayAgainBtn = () => {
    const playAgainBtn = document.createElement('button');
    playAgainBtn.classList.add('play-again-btn');
    playAgainBtn.innerText = 'Play again!';
    playAgainBtn.addEventListener('click', () => {
        resetState();
        initGame();
        render();
        renderTimer();
    });
    return playAgainBtn;
};
