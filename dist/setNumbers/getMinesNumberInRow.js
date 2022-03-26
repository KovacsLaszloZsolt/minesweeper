export const getMinesNumInRow = (row, index) => {
    return [row[index - 1], row[index], row[index + 1]].filter((field) => field && field.fieldValue === "mine").length;
};
