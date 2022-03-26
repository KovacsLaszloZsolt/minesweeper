import { levelOptions } from '../app.js';
import { LevelOptions } from '../interfaces.js';
export const setLevelOptions = (): void => {
  const html = document.querySelector('html') as HTMLHtmlElement;
  const body = document.querySelector('body') as HTMLBodyElement;

  const bodyStyles = getComputedStyle(body) as { [key: string]: any };
  const rem = parseInt(bodyStyles.getPropertyValue('font-size'));

  const root = document.querySelector(':root') as Element;
  const rootStyle = getComputedStyle(root) as { [key: string]: any };
  const fieldWidth = parseFloat(rootStyle.getPropertyValue('--fieldWidth'));

  const fieldInRow = Math.floor((window.innerWidth - rem) / (fieldWidth * rem));

  Object.keys(levelOptions).forEach((level) => {
    const levelObj = levelOptions[level as keyof LevelOptions];
    levelObj.mapWidth =
      fieldInRow > levelObj.maxFieldsInRow
        ? levelObj.maxFieldsInRow
        : fieldInRow;
    levelObj.mapHeight = Math.floor(
      levelObj.maxNumOfFields / levelObj.mapWidth
    );
  });
};
