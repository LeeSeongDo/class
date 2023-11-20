// 05-01-routing-moved 페이지
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
      number: Number(router.query.pageNum),
    },
  });

  console.log(data);

  return (
    <div>
      <h1>{router.query?.pageNum}번 페이지 이동이 완료되었습니다.</h1>
      <p>{data?.fetchBoard?.writer}</p>
      <p>{data?.fetchBoard?.title}</p>
      <p>{data?.fetchBoard?.contents}</p>
      <p>{data?.fetchBoard?.number}</p>
    </div>
  );
}
