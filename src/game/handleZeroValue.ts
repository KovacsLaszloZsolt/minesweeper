import {
  Field,
  GameFieldMap,
  PartRowObj,
  RowField,
  RowObj,
} from "../interfaces";
import { gameState } from "../app.js";
import { getBefCurAftRow } from "../common/getBefCurAftRow.js";
import e from "express";

export const handleZeroValue = (
  fieldmap: GameFieldMap,
  index: number,
  rowIndex: number
): void => {
  // const getR;
  // let rows: Array<RowObj> = getBefCurAftRow(rowIndex, fieldmap);

  // const getBefCurAftFields = (
  //   index: number,
  //   rows: Array<RowObj>
  // ): Array<RowObj> => {
  //   return rows.map((row) =>
  //     row.row.slice(index - 1 !== -1 ? index - 1 : 0, index + 2)
  //   );
  // };

  const getPartFieldMap = (
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

  const PartFieldMap = getPartFieldMap(
    rowIndex,
    index,
    gameState.gameFieldsMap
  );

  PartFieldMap.forEach((row) => {
    row.rowFields.forEach((field) => {
      if (field.field.fieldValue === 0) {
        if (!field.field.isOpen) {
          field.field.isOpen = true;

          const openField = (rowIndex: number, index: number) => {
            const fieldDiv = document.querySelector(
              `[data-position="${rowIndex}-${index}"]`
            ) as HTMLDivElement;
            fieldDiv.innerText = "";
            fieldDiv.classList.add("open");
          };

          openField(row.rowIndex, field.index);
          handleZeroValue(fieldmap, field.index, row.rowIndex);
        }
      }
      if (field.field.fieldValue !== "mine" && field.field.fieldValue! > 0) {
        const openField = (rowIndex: number, index: number) => {
          const fieldDiv = document.querySelector(
            `[data-position="${rowIndex}-${index}"]`
          ) as HTMLDivElement;
          fieldDiv.innerText = field.field.fieldValue as string;
          fieldDiv.classList.add("open-num");
        };
        openField(row.rowIndex, field.index);
      }
    });
  });

  console.log(gameState.gameFieldsMap);
};
