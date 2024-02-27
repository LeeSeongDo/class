// 01-input 입니다.

import { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  type?: "text" | "password" | "email";
  register: UseFormRegisterReturn;
}

export default function Input01(props: IInputProps): JSX.Element {
  return <input type={props.type} {...props.register} />;
}
