// 27-03-detail
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from 'dompurify'


const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function StaticRoutingMovedPage():JSX.Element {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.pageNum,
    },
  });
  console.log(data)
  return (
    <div>      
      <p>작성자 : {data?.fetchBoard.writer}</p>
      <p>제목 : {data?.fetchBoard.title}</p>
      
      {typeof window !== "undefined" && (
        <div dangerouslySetInnerHTML={{
          __html: Dompurify.sanitize(data?.fetchBoard?.contents),
        }}></div>
      )}

      {/* <div dangerouslySetInnerHTML={{
        __html: data?.fetchBoard?.contents,
      }}></div> */}
    </div>
  );
}
