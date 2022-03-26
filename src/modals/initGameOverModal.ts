import { initPlayAgainBtn } from '../init/initPlayAgainBtn.js';

export const initGameOverModal = (): HTMLDivElement => {
  const gameOverModal = document.createElement('div') as HTMLDivElement;
  gameOverModal.classList.add('modal', 'game-over');
  gameOverModal.innerHTML = '<p>Game Over</p>';

  gameOverModal.appendChild(initPlayAgainBtn());

  return gameOverModal;
};
