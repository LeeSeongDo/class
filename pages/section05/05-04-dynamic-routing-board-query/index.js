// 05-01-routing 페이지
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const FETCH_BOARDS = gql`
  query {
    fetchBoards(page: 1) {
      writer
    }
  }
`;

export default function StaticRoutingPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const router = useRouter();
  console.log(data);
  const MoveOne = () => {
    router.push("/section05/05-04-dynamic-routing-board-query-moved/1");
  };

  const MoveTwo = () => {
    router.push("/section05/05-04-dynamic-routing-board-query-moved/2");
  };

  const MoveThree = () => {
    router.push("/section05/05-04-dynamic-routing-board-query-moved/3");
  };

  return (
    <div>
      <button onClick={MoveOne}>1번 게시글로 이동하기.</button>
      <button onClick={MoveTwo}>2번 게시글로 이동하기.</button>
      <button onClick={MoveThree}>3번 게시글로 이동하기.</button>

      {data?.fetchBoards.map((dd) => (
        <div>{dd?.writer}</div>
      ))}
    </div>
  );
}
