import { gameState } from '../app.js';
export const renderTimer = () => {
    const timerSpan = document.querySelector('.timer');
    const mins = Math.floor(gameState.timer / 60);
    const secs = gameState.timer % 60;
    const setDouble = (num) => {
        return num < 10 ? `0${num}` : `${num}`;
    };
    timerSpan.innerHTML = `${setDouble(mins)} : ${setDouble(secs)}`;
};
