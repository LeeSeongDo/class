// 09-03- 수정하기
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWrite from "../../../../../src/components/units/board/09-write2/BoardWrite.container";

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

export default function GraphqlPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });

  return <BoardWrite isEdit={true} data={data} />;
}
