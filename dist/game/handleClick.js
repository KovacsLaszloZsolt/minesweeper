import { DeviceType } from '../interfaces.js';
import { gameState } from '../app.js';
import { setTimer } from './setTimer.js';
import { checkFieldValue } from './checkFieldValue.js';
import { setModalPosition } from './setModalPosition.js';
export let clickedFieldIndexes = {
    rowIndex: null,
    index: null,
};
export const handleClick = (e, rowIndex, index, field) => {
    if (field.isOpen) {
        return;
    }
    if (!gameState.gameStarted) {
        gameState.gameStarted = true;
        setTimer();
    }
    if (field.isFlaged && gameState.deviceType !== 'mobile') {
        return;
    }
    clickedFieldIndexes = {
        rowIndex: rowIndex,
        index: index,
    };
    if (gameState.deviceType === DeviceType.mobile) {
        const modal = document.querySelector('.mobile-modal');
        modal.classList.remove('hidden');
        setModalPosition(e, modal);
        return;
    }
    checkFieldValue();
};
