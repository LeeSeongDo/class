// useState

import { useState } from "react";
import Child1 from "../../../src/components/units/15-lifting-state-up/Child1";
import Child2 from "../../../src/components/units/15-lifting-state-up/Child2";

export default function StatePage(): JSX.Element {
  const [count, setCount] = useState(0);

  const ClickEvent = (): void => {
    setCount((prev: number) => prev + 1);
  };

  return (
    <>
      <Child1 count={count} setCount={setCount} />
      <div>==============</div>
      <Child2 count={count} setCount={setCount} ClickEvent={ClickEvent} />
    </>
  );
}
