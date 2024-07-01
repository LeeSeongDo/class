import { useState } from "react";

export default function CounterStatePage() {
  const [count, setCount] = useState(0);
  const ClickEvent = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <div role="count">{count}</div>
      {/* 여기서 role은 id 같은 느낌으로 사용됩니다. */}
      <button onClick={ClickEvent} role="count-button">
        카운터를 올려라!
      </button>
    </div>
  );
}
