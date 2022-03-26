export const getBefCurAftRow = (rowIndex, gameField) => {
    const rows = [];
    for (let i = -1; i < 2; i++) {
        if (gameField[rowIndex + i]) {
            rows.push({ rowIndex: rowIndex + i, row: gameField[rowIndex + i] });
        }
    }
    return rows;
};
