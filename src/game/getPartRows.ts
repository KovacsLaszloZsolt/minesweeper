import { RowObj, PartRowObj } from '../interfaces';
export const getPartRows = (index: number, fullRows: RowObj[]) => {
  const rows: Array<PartRowObj> = fullRows.map((row) => {
    const partRowObj: PartRowObj = {
      rowIndex: row.rowIndex,
      rowFields: [],
    };

    for (let i = -1; i < 2; i++) {
      const field = row.row[index + i];
      if (field) {
        partRowObj.rowFields.push({ index: index + i, field: field });
      }
    }
    return partRowObj;
  });
  return rows;
};
