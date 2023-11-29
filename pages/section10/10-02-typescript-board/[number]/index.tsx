// 09-03-상세페이지
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
      number
    }
  }
`;
export default function StaticRoutingMovedPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });

  console.log(router);

  const onClickMove = () => {
    router.push(
      `/section10/10-02-typescript-boards/${router.query.number}/edit`
    );
  };

  return (
    <div>
      <h1>{router.query?.number}번 페이지 이동이 완료되었습니다.</h1>
      <p>{data?.fetchBoard?.writer}</p>
      <p>{data?.fetchBoard?.title}</p>
      <p>{data?.fetchBoard?.contents}</p>
      <p>{data?.fetchBoard?.number}</p>
      <button onClick={onClickMove}>수정하러가기</button>
    </div>
  );
}
