// 05-01-routing 페이지
import { useRouter } from "next/router";
import { useQuery, gql, useMutation } from "@apollo/client";

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

const DELETE_BOARDS = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      _id
      number
      message
      __typename
    }
  }
`;

// 08-03-map-boards-delete
export default function StaticRoutingPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const [deleteBoard] = useMutation(DELETE_BOARDS);

  const router = useRouter();
  const MoveOne = () => {
    router.push("/section05/05-03-static-routing-board-query-moved/1");
  };

  const MoveTwo = () => {
    router.push("/section05/05-03-static-routing-board-query-moved/2");
  };

  const MoveThree = () => {
    router.push("/section05/05-03-static-routing-board-query-moved/3");
  };

  const RemoveData = (e) => {
    deleteBoard({
      variables: { number: Number(e.target.id) },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };

  return (
    <div>
      <button onClick={MoveOne}>1번 게시글로 이동하기.</button>
      <button onClick={MoveTwo}>2번 게시글로 이동하기.</button>
      <button onClick={MoveThree}>3번 게시글로 이동하기.</button>

      {data?.fetchBoards.map((dd) => (
        <div key={dd?.number}>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{dd?.number} </span>
          <span style={{ margin: "10px" }}>{dd?.title} : </span>
          <span style={{ margin: "10px" }}>{dd?.writer} </span>
          <span>
            <button id={dd?.number} onClick={RemoveData}>
              삭제버튼
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}
