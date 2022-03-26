import { checkFieldValue } from '../game/checkFieldValue.js';
import { clickedFieldIndexes } from '../game/handleClick.js';
import { handleRightClick } from '../game/handleRightClick.js';
export const initMobileModal = () => {
    const mobileModal = document.createElement('div');
    mobileModal.classList.add('mobile-modal', 'hidden');
    const trowelBtn = document.createElement('i');
    trowelBtn.classList.add('fa-solid', 'fa-trowel');
    mobileModal.appendChild(trowelBtn);
    trowelBtn.addEventListener('click', () => {
        checkFieldValue();
        mobileModal.classList.add('hidden');
    });
    const closeModalBtn = document.createElement('span');
    closeModalBtn.classList.add('material-icons-outlined', 'close');
    closeModalBtn.innerText = 'close';
    mobileModal.appendChild(closeModalBtn);
    closeModalBtn.addEventListener('click', () => {
        mobileModal.classList.add('hidden');
    });
    const flagBtn = document.createElement('i');
    flagBtn.classList.add('fa', 'fa-flag');
    flagBtn.addEventListener('click', () => {
        handleRightClick(clickedFieldIndexes.rowIndex, clickedFieldIndexes.index);
        mobileModal.classList.add('hidden');
    });
    mobileModal.appendChild(flagBtn);
    return mobileModal;
};
