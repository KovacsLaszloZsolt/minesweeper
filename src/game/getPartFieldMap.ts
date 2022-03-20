import { GameFieldMap, PartRowObj } from '../interfaces';
import { getBefCurAftRow } from '../common/getBefCurAftRow.js';
import { getPartRows } from './getPartRows.js';

export const getPartFieldMap = (
  rowIndex: number,
  index: number,
  gameField: GameFieldMap
): Array<PartRowObj> => {
  const fullRows = getBefCurAftRow(rowIndex, gameField);
  console.log('getBefCurAftRow:', fullRows);

  const rows: Array<PartRowObj> = getPartRows(index, fullRows);
  return rows;
};
