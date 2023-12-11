// 자식 컴포넌트 2
// useState

import { useState } from "react";

export default function Child2(props): JSX.Element {
  return (
    <>
      <div>자식 2의 카운트 : {props?.count}</div>
      <button onClick={props?.ClickEvent}>클릭 이벤트</button>
    </>
  );
}
