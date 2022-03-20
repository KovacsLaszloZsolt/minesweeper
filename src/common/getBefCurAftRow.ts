import { Field, GameFieldMap, RowObj } from '../interfaces';

export const getBefCurAftRow = (
  rowIndex: number,
  gameField: GameFieldMap
): Array<RowObj> => {
  const rows: Array<RowObj> = [];
  for (let i = -1; i < 2; i++) {
    if (gameField[rowIndex + i]) {
      rows.push({ rowIndex: rowIndex + i, row: gameField[rowIndex + i] });
    }
  }

  return rows;
};
