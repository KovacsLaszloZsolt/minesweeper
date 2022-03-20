import { randomNumber } from "../randomNumber.js";
import { GameFieldMap } from "../interfaces.js";

export const randomRowIndex = (gameField: GameFieldMap): number => {
  const index = randomNumber(gameField.length - 1);

  if (gameField[index]) {
    return randomRowIndex(gameField);
  }

  return index;
};
