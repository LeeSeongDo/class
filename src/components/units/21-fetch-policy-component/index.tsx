// 05-01-routing 페이지
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { MouseEvent } from "react";

import { useState } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generate/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function FetchPolicyExample() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    fetchPolicy: "network-only",
  });

  const test = new Array(10).fill(1);

  const onClickPageNumber = (event: MouseEvent<HTMLSpanElement>): void => {
    refetch({ page: Number(event.currentTarget.id) });
  };

  return (
    <div>
      {data?.fetchBoards.map((dd) => (
        <div key={dd?._id}>
          <span style={{ margin: "10px" }}>{dd?.title}</span>
          <span style={{ margin: "10px" }}>{dd?.writer}</span>
        </div>
      ))}

      {test.map((data, index) => (
        <span
          id={String(index + 1)}
          onClick={onClickPageNumber}
          style={{ margin: "10px", cursor: "pointer" }}
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
}
