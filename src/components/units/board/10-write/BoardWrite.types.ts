import { ChangeEvent, MouseEvent } from "react";

export interface IBoardwriteprops {
  isEdit: boolean;
  data?: any;
}

export interface IMyVariables {
  number: number;
  writer?: string;
  title?: string;
  contents?: string;
}

export interface IBoardWriteUIProps {
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (e: MouseEvent<HTMLButtonElement>) => void;
  isEdit: boolean;
  data?: any;
}
