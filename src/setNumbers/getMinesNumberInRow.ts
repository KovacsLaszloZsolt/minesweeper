import { Field } from "../interfaces.js";

export const getMinesNumInRow = (row: Field[], index: number) => {
  return [row[index - 1], row[index], row[index + 1]].filter(
    (field) => field && field.fieldValue === "mine"
  ).length;
};
