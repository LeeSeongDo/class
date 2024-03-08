// useState

import { useState } from "react";

export default function StatePage() {
  const result = useState(0);

  let onClickCountUp = () => {
    result[1](result[0] + 1);
  };

  let onClickCountDown = () => {
    result[1](result[0] - 1);
  }



  return (
    <>
      <div>{result[0]}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      <button onClick={onClickCountDown}>카운트 올리기</button>
    </>
  );
}
