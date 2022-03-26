import { gameState } from '../app.js';
import { handleClick } from '../game/handleClick.js';
import { handleRightClick } from '../game/handleRightClick.js';
import { initMobileModal } from '../modals/initMobileModal.js';
import { renderModal } from './renderModal.js';
import { renderRemainingFlags } from './renderRemainingFlags.js';
export const render = () => {
    const fieldCtnDiv = document.querySelector('.field-ctn');
    fieldCtnDiv.innerHTML = '';
    gameState.gameFieldsMap.forEach((row, rowIndex) => {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        fieldCtnDiv.appendChild(rowDiv);
        row.forEach((field, index) => {
            const fieldDiv = document.createElement('div');
            fieldDiv.dataset.position = `${rowIndex}-${index}`;
            fieldDiv.addEventListener('click', (e) => {
                handleClick(e, rowIndex, index, field);
            });
            fieldDiv.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                handleRightClick(rowIndex, index);
            });
            fieldDiv.classList.add('field');
            rowDiv.appendChild(fieldDiv);
        });
    });
    renderRemainingFlags(gameState.numOfFlagsLeft);
    if (gameState.deviceType === 'mobile') {
        renderModal(initMobileModal());
    }
};
