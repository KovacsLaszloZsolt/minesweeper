export const getPartRows = (index, fullRows) => {
    const rows = fullRows.map((row) => {
        const partRowObj = {
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
