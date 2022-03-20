import { Field } from '../interfaces';
import { handleZeroValue } from './handleZeroValue.js';
import { gameState, icons } from '../app.js';
import { openField } from '../render/openField.js';
import { openAllFields } from '../render/openAllFields.js';

export const handlerClick = (
  field: Field,
  index: number,
  rowIndex: number
): void => {
  if (field.isFlaged) {
    return;
  }

  switch (field.fieldValue) {
    case 'mine':
      openField(rowIndex, index, icons.mine);
      openAllFields();
      break;
    case 0:
      openField(rowIndex, index, '');
      handleZeroValue(gameState.gameFieldsMap, index, rowIndex);
      break;
    default:
      openField(rowIndex, index, field.fieldValue!);
  }
};
