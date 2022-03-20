import { Options, Field } from '../interfaces.js';
import { getMinesNumInRow } from './getMinesNumberInRow.js';
import { getBefCurAftRow } from '../common/getBefCurAftRow.js';

export const setFieldsNumber = (options: Options, gameField: Field[][]) => {
  return gameField.map((row, rowIndex) => {
    const rows = getBefCurAftRow(rowIndex, gameField);

    return row.map((item, index) => {
      if (item.fieldValue === 'mine') {
        return item;
      }

      const fieldNum = rows
        .map((row) => getMinesNumInRow(row.row, index))
        .reduce((a, b) => a + b);

      item.fieldValue = fieldNum;
      return item;
    });
  });
};
