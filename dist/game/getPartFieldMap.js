import { getBefCurAftRow } from '../common/getBefCurAftRow.js';
import { getPartRows } from './getPartRows.js';
export const getPartFieldMap = (rowIndex, index, gameField) => {
    const fullRows = getBefCurAftRow(rowIndex, gameField);
    const rows = getPartRows(index, fullRows);
    return rows;
};
