import { gameState } from '../app.js';
import { handlerClick } from '../game/handlerClick.js';
import { handlerContextmenu } from '../game/handlerContextmenu.js';

export const render = (): void => {
  const minesweeperCtn = document.querySelector('.field-ctn') as HTMLDivElement;
  gameState.gameFieldsMap.forEach((row, rowIndex) => {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    minesweeperCtn.appendChild(rowDiv);
    row.forEach((field, index) => {
      const fieldDiv = document.createElement('div');
      fieldDiv.dataset.position = `${rowIndex}-${index}`;
      fieldDiv.addEventListener('click', () => {
        handlerClick(field, index, rowIndex);
      });

      fieldDiv.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        handlerContextmenu(field, index, rowIndex, fieldDiv);
      });

      fieldDiv.classList.add('field');
      rowDiv.appendChild(fieldDiv);
    });
  });
};
