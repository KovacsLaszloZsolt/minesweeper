import { Field } from '../interfaces';
import { icons } from '../app.js';
export const handlerContextmenu = (
  field: Field,
  rowIndex: number,
  index: number,
  fieldDiv: HTMLDivElement
): void => {
  field.isFlaged = !field.isFlaged;

  if (field.isFlaged) {
    fieldDiv.innerHTML = icons.flag;
  } else {
    fieldDiv.innerHTML = '';
  }
};
