// 01-input 입니다.

import { UseFormRegisterReturn } from "react-hook-form";

interface IButtonProps {
  isActive: boolean;
  title: string;
}

export default function Button01(props: IButtonProps): JSX.Element {
  return (
    <button
      style={{ backgroundColor: props.isActive ? "yellow" : "" }}
      type="submit"
    >
      {props.title}
    </button>
  );
}
