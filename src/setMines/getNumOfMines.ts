import { randomNumber } from "../randomNumber.js";

export const getNumOfMines = (
  maxMinesNum: number,
  remamingNumOfMines: number
): number => {
  if (remamingNumOfMines === 0) {
    return 0;
  }

  const numOfMines = randomNumber(maxMinesNum);

  if (numOfMines > remamingNumOfMines) {
    return getNumOfMines(maxMinesNum, remamingNumOfMines);
  }

  return numOfMines;
};
