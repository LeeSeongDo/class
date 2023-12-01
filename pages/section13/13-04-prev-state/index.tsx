import { useState } from "react";

export default function PrevStatePage() {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  const countDown = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div>
      <p>{count}</p>

      <button onClick={countUp}>올리기</button>
      <button onClick={countDown}>내리기</button>
    </div>
  );
}
