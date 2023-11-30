// 05-01-routing 페이지
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const router = useRouter();
  console.log(data?.fetchBoards);
  const MoveOne = () => {
    router.push("/section05/05-03-static-routing-board-query-moved/1");
  };

  const MoveTwo = () => {
    router.push("/section05/05-03-static-routing-board-query-moved/2");
  };

  const MoveThree = () => {
    router.push("/section05/05-03-static-routing-board-query-moved/3");
  };

  const ClickEvent = (event) => {
    alert(event.currentTarget.id + "님이 작성한 글입니다.");
  };

  const qqq1 = () => {
    alert("1번 클릭");
  };

  const qqq2 = () => {
    alert("2번 클릭");
  };

  const qqq3 = () => {
    alert("3번 클릭");
  };

  const qqq4 = () => {
    alert("4번 클릭");
  };

  return (
    <div>
      <button onClick={MoveOne}>1번 게시글로 이동하기.</button>
      <button onClick={MoveTwo}>2번 게시글로 이동하기.</button>
      <button onClick={MoveThree}>3번 게시글로 이동하기.</button>

      {data?.fetchBoards.map((dd) => (
        <div key={dd?.number} id={dd?.writer} onClick={qqq1}>
          <span onClick={qqq2}>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }} onClick={qqq3}>
            {dd?.number}{" "}
          </span>
          <span style={{ margin: "10px" }} onClick={qqq4}>
            {dd?.title} :{" "}
          </span>
          <span style={{ margin: "10px" }}>{dd?.writer}</span>
        </div>
      ))}
    </div>
  );
}
