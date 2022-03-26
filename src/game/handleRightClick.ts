import { gameState, icons } from '../app.js';
import { renderRemainingFlags } from '../render/renderRemainingFlags.js';
export const handleRightClick = (rowIndex: number, index: number): void => {
  if (!gameState.gameStarted) {
    return;
  }
  const field = gameState.gameFieldsMap[rowIndex][index];
  const fieldDiv = document.querySelector(
    `[data-position="${rowIndex}-${index}"]`
  ) as HTMLDivElement;

  if (field.isOpen) {
    return;
  }

  field.isFlaged = !field.isFlaged;

  if (field.isFlaged) {
    fieldDiv.innerHTML = icons.flag;
    gameState.numOfFlagsLeft--;
  } else {
    fieldDiv.innerHTML = '';
    gameState.numOfFlagsLeft++;
  }

  renderRemainingFlags(gameState.numOfFlagsLeft);
};
