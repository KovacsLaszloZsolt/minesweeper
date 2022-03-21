export type GameState = {
  level: string;
  gameStarted: boolean;
  isGameOver: boolean;
  gameFieldsMap: GameFieldMap;
  numOfFlagsLeft: number;
  timer: number;
};

export enum Levels {
  easy = 'easy',
  medium = 'medium',
  hard = 'hard',
}
export enum Icons {
  flag = '<i class="fa-solid fa-flag"></i>',
  mine = '<i class="fa-solid fa-bomb">',
}

export type IconsObj = {
  flag: Icons.flag;
  mine: Icons.mine;
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
  maxNumOfFields: number;
  maxFieldsInRow: number;
  mapWidth?: number;
  mapHeight?: number;
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
