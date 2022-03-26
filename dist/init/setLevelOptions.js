import { levelOptions } from '../app.js';
export const setLevelOptions = () => {
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    const bodyStyles = getComputedStyle(body);
    const rem = parseInt(bodyStyles.getPropertyValue('font-size'));
    const root = document.querySelector(':root');
    const rootStyle = getComputedStyle(root);
    const fieldWidth = parseFloat(rootStyle.getPropertyValue('--fieldWidth'));
    const fieldInRow = Math.floor((window.innerWidth - rem) / (fieldWidth * rem));
    Object.keys(levelOptions).forEach((level) => {
        const levelObj = levelOptions[level];
        levelObj.mapWidth =
            fieldInRow > levelObj.maxFieldsInRow
                ? levelObj.maxFieldsInRow
                : fieldInRow;
        levelObj.mapHeight = Math.floor(levelObj.maxNumOfFields / levelObj.mapWidth);
    });
};
