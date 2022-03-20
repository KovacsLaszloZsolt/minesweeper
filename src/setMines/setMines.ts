import { randomNumber } from "../randomNumber.js";
import { Field } from "../interfaces.js";
export const setMines = (
  row: Array<Field>,
  minesNumber: number
): Array<Field> => {
  for (let i = 0; i < minesNumber; i++) {
    const getMinesPosition = (row: Array<Field>): number => {
      const index = randomNumber(row.length - 1);

      if (row[index].fieldValue === "mine") {
        return getMinesPosition(row);
      }

      return index;
    };

    row[getMinesPosition(row)].fieldValue = "mine";
  }
  return row;
};
