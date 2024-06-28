// 05-01-routing 페이지
import { useRouter } from "next/router";
import { useQuery, gql, useApolloClient } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generate/types";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARD = gql`
  query fetchBoard($boardId: Int) {
    fetchBoard(boardId: $boardid) {
      writer
      title
      contents
      id
    }
  }
`;


export default function StaticRoutingPage2(): JSX.Element {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const router = useRouter();
  const client = useApolloClient();

  const prefetchBoard = (boardId: string) => async () => {
    await client.query({
       query: FETCH_BOARDS,
       variables: {boardId}
    })
  }

  const onClickMove = (boardId: string): void => {
    router.push(`/section31/31-10-data-prefetch-moved/${boardId}`)
  }

  return (
    <div>
      {data?.fetchBoards.map((dd) => (
        <div key={dd?._id}>
          <span 
            style={{ margin: "10px" }} 
            onMouseOver={prefetchBoard(dd._id)}
            
          >
            {dd?.title}
         </span>
          <span style={{ margin: "10px" }}>{dd?.writer}</span>
        </div>
      ))}
    </div>
  );
}
