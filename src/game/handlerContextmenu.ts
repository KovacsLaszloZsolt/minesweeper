import { Field } from '../interfaces';
import { gameState, icons } from '../app.js';
import { renderRemainingFlags } from '../render/renderRemainingFlags.js';
export const handlerContextmenu = (
  field: Field,
  rowIndex: number,
  index: number,
  fieldDiv: HTMLDivElement
): void => {
  if (!gameState.gameStarted) {
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
