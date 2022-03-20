import { RowField } from "../interfaces";
export const openField = (rowIndex: number, field: RowField) => {
  const fieldDiv = document.querySelector(
    `[data-position="${rowIndex}-${field.index}"]`
  ) as HTMLDivElement;
  fieldDiv.innerText = field.field.fieldValue as string;
  fieldDiv.classList.add("open-num");
};
