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
    variables: {boardId: router.query.pageNum}
  })

  return (
    <div>      
      <div style={{color: "red"}}>작성자 : {data?.fetchBoard?.writer}</div>
      <div style={{color: "blue"}}>제목 : {data?.fetchBoard?.title}</div>

      {typeof window !== "undefined" ? (
        <div
            style={{color: "green"}}
            dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(data?.fetchBoard?.contents),
          }}
          />
        ) : (
        <div style={{color: "green"}} />
        )}
      <div style={{color: "brown"}}>주소 : 구로구</div>
      {/* <div dangerouslySetInnerHTML={{
        __html: data?.fetchBoard?.contents,
      }}></div> */}

     
    </div>
  );
}
