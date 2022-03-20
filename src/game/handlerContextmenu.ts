import { Field } from '../interfaces';
export const handlerContextmenu = (
  field: Field,
  rowIndex: number,
  index: number,
  fieldDiv: HTMLDivElement
): void => {
  field.isFlaged = !field.isFlaged;

  if (field.isFlaged) {
    fieldDiv.innerHTML = '<i class="fa-solid fa-flag"></i>';
  } else {
    fieldDiv.innerHTML = '';
  }
};
