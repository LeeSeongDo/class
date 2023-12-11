// 05-01-routing 페이지
import { useQuery, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generate/types";
import CommentItem from "../../../src/components/units/16-comment-item";

// 값을 가져오는 GraphQL
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

export default function StaticRoutingPage2() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  return (
    <div>
      {data?.fetchBoards.map((dd, index) => (
        <CommentItem key={dd._id} dd={dd} />
      ))}
    </div>
  );
}
