import { gameState } from '../app.js';
export const openField = (rowIndex, index, value) => {
    const field = gameState.gameFieldsMap[rowIndex][index];
    if (!field.isOpen) {
        field.isOpen = true;
        const fieldDiv = document.querySelector(`[data-position="${rowIndex}-${index}"]`);
        fieldDiv.innerHTML = value;
        fieldDiv.classList.add(!value ? 'open' : value > 0 ? 'open-num' : 'open-mine');
        let color;
        switch (value) {
            case 1:
                color = 'blue';
                break;
            case 2:
                color = 'green';
                break;
            case 3:
                color = 'brown';
                break;
            case 4:
                color = 'yellow';
                break;
            default:
                color = 'black';
        }
        fieldDiv.classList.add(color);
    }
};
