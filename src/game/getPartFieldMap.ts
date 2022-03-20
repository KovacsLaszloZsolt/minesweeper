import { GameFieldMap, PartRowObj, Field, RowField } from "../interfaces";

export const getPartFieldMap = (
  rowIndex: number,
  index: number,
  gameField: GameFieldMap
): Array<PartRowObj> => {
  const rows: Array<PartRowObj> = [];
  for (let i = -1; i < 2; i++) {
    const row: Array<Field> | undefined = gameField[rowIndex + i]
      ? gameField[rowIndex + i]
      : undefined;
    if (row) {
      const partRowObj: PartRowObj = {
        rowIndex: rowIndex + i,
        rowFields: [],
      };
      for (let i = -1; i < 2; i++) {
        if (row[index + i]) {
          const field: RowField = {
            index: index + i,
            field: row[index + i],
          };
          partRowObj.rowFields.push(field);
        }
      }
      rows.push(partRowObj);
    }
  }
  return rows;
};
