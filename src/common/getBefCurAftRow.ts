import { gameState } from "../app.js";
import { Field, GameFieldMap, RowObj } from "../interfaces";

export const getBefCurAftRow = (
  rowIndex: number,
  gameField: GameFieldMap
): Array<RowObj> => {
  const rows: Array<RowObj> = [];
  for (let i = -1; i < 2; i++) {
    const row: RowObj | undefined = gameField[rowIndex + i]
      ? { rowIndex: rowIndex + i, row: gameField[rowIndex + i] }
      : undefined;
    if (row) {
      rows.push(row);
    }
  }
  // const rows = [
  //   gameField[rowIndex - 1] ? gameField[rowIndex - 1] : null,
  //   gameField[rowIndex],
  //   !gameField[rowIndex + 1] ? gameField[rowIndex + 1] : null,
  // ].filter((row) => row) as <Array<Array<Field>>

  return rows;
};
