// useState

import { useState } from "react";

export default function StatePage() {
  const [count, setCount] = useState(0);

  let ClickEvent = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={ClickEvent}>클릭 이벤트</button>
    </>
  );
}
