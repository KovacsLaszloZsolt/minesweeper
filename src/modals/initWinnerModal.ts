import { initPlayAgainBtn } from '../init/initPlayAgainBtn.js';

export const initWinnerModal = (): HTMLDivElement => {
  const winnerModal = document.createElement('div');
  winnerModal.classList.add('modal', 'game-over');
  winnerModal.innerHTML = `
        <h1>Congratulation!</h1>
        <h2>You win!</h2>
    `;
  winnerModal.appendChild(initPlayAgainBtn());
  return winnerModal;
};
