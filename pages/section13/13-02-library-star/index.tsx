import React, { useState } from "react";
import { Space, Rate } from "antd";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export default function LibraryRatePage(): JSX.Element {
  const [value, setValue] = useState<number>(3);

  //  1단계 방식
  const onChangeValue = (value: number): void => {
    setValue(value);
  };

  //  2단계 방식
  //  const onChangeValue = (value: number): any => setValue(value);

  return (
    <Space>
      {/* 1단계 방식 */}
      {/* <Rate onChange={onChangeValue} value={value} /> 1단계 방식 */}

      {/* 2단계 방식 */}
      {/* <Rate onChange={onChangeValue} value={value} /> 2단계 방식 */}

      {/* 3단계 방식 */}
      {/* <Rate onChange={(value: number) => setValue(value)} value={value} /> */}

      {/* 4단계 방식 */}
      {/* setValue에 value가 들어가면 생략 가능 (그냥 setValue만 적어도 실행 가능.) */}
      <Rate onChange={setValue} value={value} />

      {/* <Rate onChange={setValue} value={value} /> */}
    </Space>
  );
}
