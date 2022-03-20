import { Field } from '../interfaces';
import { handleZeroValue } from './handleZeroValue.js';
import { gameState } from '../app.js';
import { openField } from '../render/openField.js';

export const handlerClick = (
  field: Field,
  index: number,
  rowIndex: number
): void => {
  if (field.isFlaged) {
    return;
  }
  gameState.gameFieldsMap[rowIndex][index].isOpen = true;

  switch (field.fieldValue) {
    case 'mine':
      openField(rowIndex, index, '<i class="fa-solid fa-bomb">');
      console.log('Game Over');
      break;
    case 0:
      openField(rowIndex, index, '');
      handleZeroValue(gameState.gameFieldsMap, index, rowIndex);
      break;
    default:
      openField(rowIndex, index, field.fieldValue!);
  }
};
