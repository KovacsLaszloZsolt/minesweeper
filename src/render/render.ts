import { gameState } from "../app.js";
import { handlerClick } from "../game/handlerClick.js";

export const render = (): void => {
  const minesweeperCtn = document.querySelector(".field-ctn") as HTMLDivElement;
  gameState.gameFieldsMap.forEach((row, rowIndex) => {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    minesweeperCtn.appendChild(rowDiv);
    row.forEach((field, index) => {
      const fieldDiv = document.createElement("div");
      fieldDiv.dataset.position = `${rowIndex}-${index}`;
      // field.fieldValue === "mine" ? "X" : (field.fieldValue as string);
      fieldDiv.addEventListener("click", (e) =>
        handlerClick(e, field, index, rowIndex)
      );
      fieldDiv.classList.add("field");
      rowDiv.appendChild(fieldDiv);
    });
  });
};
