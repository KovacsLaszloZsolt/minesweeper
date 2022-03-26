import { gameState } from '../app.js';

export const setModalPosition = (e: MouseEvent, modal: HTMLDivElement) => {
  const field = document.querySelector('.field') as HTMLDivElement;
  const body = document.querySelector('body') as HTMLBodyElement;
  const bodyStyles = getComputedStyle(body) as { [key: string]: any };
  const rem = parseInt(bodyStyles.getPropertyValue('font-size'));

  function getElmSize(list: Array<string>, node: HTMLElement) {
    const style = window.getComputedStyle(node);
    return list
      .map((k) => parseInt(style.getPropertyValue(k), 10))
      .reduce((prev, cur) => prev + cur);
  }

  const height = [
    'margin-top',
    'margin-bottom',
    'border-top',
    'border-bottom',
    'padding-top',
    'padding-bottom',
    'height',
  ];

  const width = [
    'margin-left',
    'margin-right',
    'border-left',
    'border-right',
    'padding-left',
    'padding-right',
    'width',
  ];
  modal.style.left = 'unset';
  modal.style.top = 'unset';
  const fieldWidth = getElmSize(width, field);

  const clickedField = e.target as HTMLDivElement;

  const rowIndex = parseInt(
    clickedField.dataset.position?.split('-')[0] as string
  );
  const index = parseInt(
    clickedField.dataset.position?.split('-')[1] as string
  );

  const rowLength = gameState.gameFieldsMap[0].length;
  if (index < 2) {
    modal.style.left = '0rem';
  } else if (index < rowLength - 2) {
    modal.style.left = `${((index - 1) * fieldWidth) / rem}rem`;
  } else {
    modal.style.left = `${((rowLength - 3) * fieldWidth) / rem}rem`;
  }

  const fieldHeight = gameState.gameFieldsMap.length;
  if (rowIndex === 0) {
    modal.style.top = `${fieldWidth / rem}rem`;
  }

  if (rowIndex < fieldHeight - 1) {
    modal.style.top = `${((rowIndex + 1) * fieldWidth) / rem}rem`;
  }

  if (rowIndex === fieldHeight - 1) {
    modal.style.top = `${((rowIndex - 1) * fieldWidth) / rem}rem`;
  }
};
