import { gameState } from '../app.js';
export const openField = (rowIndex, index, value) => {
    const field = gameState.gameFieldsMap[rowIndex][index];
    if (!field.isOpen) {
        field.isOpen = true;
        const fieldDiv = document.querySelector(`[data-position="${rowIndex}-${index}"]`);
        fieldDiv.innerHTML = value;
        fieldDiv.classList.add(!value ? 'open' : value > 0 ? 'open-num' : 'open-mine');
    }
};
