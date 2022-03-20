import { gameState } from '../app.js';
export const renderTimer = (timerSpan: HTMLSpanElement) => {
  const mins = Math.floor(gameState.timer / 60);
  const secs = gameState.timer % 60;
  const setDouble = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };
  timerSpan.innerHTML = `${setDouble(mins)} : ${setDouble(secs)}`;
};
