import { icons, gameState } from '../app.js';
import { clickedFieldIndexes } from '../game/handleClick.js';
import { openField } from '../render/openField.js';
import { openAllFields } from '../render/openAllFields.js';
import { handleZeroValue } from './handleZeroValue.js';
import { isWinner } from './isWinner.js';
import { renderModal } from '../render/renderModal.js';
import { initWinnerModal } from '../modals/initWinnerModal.js';
import { initGameOverModal } from '../modals/initGameOverModal.js';

export const checkFieldValue = (): void => {
  const rowIndex = clickedFieldIndexes.rowIndex!;
  const index = clickedFieldIndexes.index!;
  const field = gameState.gameFieldsMap[rowIndex][index];
  const fieldDiv = document.querySelector(
    `[data-position='${rowIndex}-${index}']`
  ) as HTMLDivElement;
  fieldDiv.replaceWith(fieldDiv.cloneNode(true));

  let won = false;
  switch (field.fieldValue) {
    case 'mine':
      openField(rowIndex, index, icons.mine);
      openAllFields();
      gameState.gameStarted = false;
      gameState.isGameOver = true;
      renderModal(initGameOverModal());
      break;
    case 0:
      openField(rowIndex, index, '');
      handleZeroValue(gameState.gameFieldsMap, index, rowIndex);
      won = isWinner();
      break;
    default:
      openField(rowIndex, index, field.fieldValue);
      won = isWinner();
  }

  if (won) {
    gameState.gameStarted = false;
    gameState.isGameOver = true;
    renderModal(initWinnerModal());
  }
};
