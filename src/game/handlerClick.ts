import { Field } from "../interfaces";
import { handleZeroValue } from "./handleZeroValue.js";
import { gameState } from "../app.js";

export const handlerClick = (
  e: MouseEvent,
  field: Field,
  index: number,
  rowIndex: number
): void => {
  const div = e.target as HTMLElement;
  div.innerText = field.fieldValue ? (field.fieldValue as string) : "";

  gameState.gameFieldsMap[rowIndex][index].isOpen = true;

  switch (field.fieldValue) {
    case "mine":
      div.classList.add("open-mine");
      console.log("Game Over");
      break;
    case 0:
      div.classList.add("open");
      handleZeroValue(gameState.gameFieldsMap, index, rowIndex);
      break;
    default:
      div.classList.add("open-num");
  }
};
