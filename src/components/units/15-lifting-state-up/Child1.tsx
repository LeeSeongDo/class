// 자식 컴포넌트 1
// useState

import { useState } from "react";

export default function Child1(props): JSX.Element {
  let ClickEvent = () => {
    props?.setCount((prev: number) => prev + 1);
  };

  let ClickDownEvent = () => {
    props?.setCount((prev: number) => prev - 1);
  };

  return (
    <>
      <div>자식 1의 카운트 : {props?.count}</div>
      <button onClick={ClickEvent}>클릭 이벤트</button>
      <button onClick={ClickDownEvent}>감소 클릭 이벤트</button>
    </>
  );
}
