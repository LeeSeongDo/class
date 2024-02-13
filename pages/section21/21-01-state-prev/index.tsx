import { useState } from "react";

export default function StatePrev(prev: number): JSX.Element {
  const [count, setCount] = useState<number>(0);

  function onClickCountUp(): void {
    setCount(count + 1);
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 업.</button>
    </div>
  );
}
