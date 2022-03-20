import { gameState, icons } from '../app.js';
import { openField } from './openField.js';

export const openAllFields = () => {
  // console.log(gameState.gameFieldsMap);
  gameState.gameFieldsMap.forEach((row, rowIndex) => {
    row.forEach((field, index) => {
      openField(
        rowIndex,
        index,
        !field.fieldValue
          ? ''
          : field.fieldValue === 'mine'
          ? icons.mine
          : field.fieldValue
      );
    });
  });
};
