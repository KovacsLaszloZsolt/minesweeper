import { gameState } from '../app.js';
export const isWinner = () => {
    const isWinner = gameState.gameFieldsMap.every((row) => row
        .filter((field) => field.fieldValue !== 'mine')
        .every((field) => field.isOpen === true));
    return isWinner;
};
