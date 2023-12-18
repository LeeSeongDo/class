import { Component, useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function FunctionalCounterPage() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  // useEffect(() => {
  //   // 그려지고 나서 실행 componentDidMount()와 동일
  // }, []);

  // useEffect(() => {
  //   // 값이 변경될 때 실행 componentDidUpdate()도 포함.
  //   console.log("값이 변경 됐을 때 실행");
  // });

  // useEffect(() => {
  //   // componentWillUnmount()와 동일.
  //   return () => {
  //     console.log("사라지기 전에 실행");
  //   };
  // }, []);

  // useEffect 하나로 합치기
  useEffect(() => {
    console.log("그려지고 나서 실행 componentDidMount()와 동일");
    console.log("값이 변경 됐을 때 실행");
    return () => {
      console.log("사라지기 전에 실행");
    };
  });

  // 잘못된 사용법
  // useEffect(() => {
  // 	setState() // setState를 하게 되면 추가 렌더링 발생 가급적이면 사용하지 말자.
  // }. [count])

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  return (
    <div>
      <span>{count}</span>
      <button onClick={onClickCountUp}>카운트 올리기!!</button>
      <button onClick={onClickMove}>나가기</button>
    </div>
  );
}
