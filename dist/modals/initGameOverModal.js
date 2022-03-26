import { initPlayAgainBtn } from '../init/initPlayAgainBtn.js';
export const initGameOverModal = () => {
    const gameOverModal = document.createElement('div');
    gameOverModal.classList.add('modal', 'game-over');
    gameOverModal.innerHTML = '<p>Game Over</p>';
    gameOverModal.appendChild(initPlayAgainBtn());
    return gameOverModal;
};
