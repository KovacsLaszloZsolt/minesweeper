import { levelOptions } from '../app.js';
import { LevelOptions } from '../interfaces.js';
export const setLevelOptions = (): void => {
  const html = document.querySelector('html') as HTMLHtmlElement;
  const body = document.querySelector('body') as HTMLBodyElement;

  const bodyStyles = getComputedStyle(body) as { [key: string]: any };
  const rem = parseInt(bodyStyles.getPropertyValue('font-size'));

  const fieldInRow = Math.floor((window.innerWidth - rem) / (3 * rem));

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

  console.log(window.innerWidth);
  console.log(levelOptions);

  // maxNumOfFields: 100,
  //   maxFieldsInRow: 10,
  // if (
  //   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  //     navigator.userAgent
  //   )
  // ) {
  //   // true for mobile device
  //   console.log('mobile device');
  // } else {
  //   // false for not mobile device
  //   console.log('not mobile device');
  // }
};
