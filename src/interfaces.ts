export type GameState = {
  level: string;
  gameStarted: boolean;
  isGameOver: boolean;
  gameFieldsMap: GameFieldMap;
};

export type GameFieldMap = Array<Array<Field>>;

export type Field = {
  fieldValue: string | number | null;
  isOpen: boolean;
  isFlaged: boolean;
};

export type LevelOptions = {
  easy: Options;
  medium: Options;
  hard: Options;
};

export type Options = {
  fieldWidth: number;
  fieldHeight: number;
  numOfMines: number;
};

export type RowObj = {
  rowIndex: number;
  row: Array<Field>;
};

export type PartRowObj = {
  rowIndex: number;
  rowFields: Array<RowField>;
};

export type RowField = {
  index: number;
  field: Field;
};