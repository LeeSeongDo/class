// 05-01-routing 페이지
import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  const MoveOne = () => {
    router.push("/section05/05-02-static-routing-board-moved/1");
  };

  const MoveTwo = () => {
    router.push("/section05/05-02-static-routing-board-moved/2");
  };

  const MoveThree = () => {
    router.push("/section05/05-02-static-routing-board-moved/3");
  };

  return (
    <div>
      <button onClick={MoveOne}>1번 게시글로 이동하기.</button>
      <button onClick={MoveTwo}>2번 게시글로 이동하기.</button>
      <button onClick={MoveThree}>3번 게시글로 이동하기.</button>
    </div>
  );
}
