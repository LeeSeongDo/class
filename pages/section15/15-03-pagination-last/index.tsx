// 05-01-routing 페이지
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { MouseEvent } from "react";
import { useState } from "react";

import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../src/commons/types/generate/types";

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

const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

export default function StaticRoutingPage2() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);
  console.log(lastPage);

  let test = new Array(10).fill(1);

  // 페이지 번호
  const [pageNumber, setPageNumber] = useState(1);

  // 이전 페이지
  const onClickPrevPage = (): void => {
    if (pageNumber > 10) {
      setPageNumber(pageNumber - 10);
    }
  };

  // 다음 페이지
  const onClickNextPage = (): void => {
    // void refetch({ page: 21 });
    if (pageNumber + 10 <= lastPage) setPageNumber(pageNumber + 10);
  };

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

      <div>
        <span style={{ cursor: "pointer" }} onClick={onClickPrevPage}>
          이전 페이지
        </span>
        {test.map((data, index) =>
          index + pageNumber <= lastPage ? (
            <span
              id={String(index + pageNumber)}
              onClick={onClickPageNumber}
              style={{ margin: "10px", cursor: "pointer" }}
            >
              {index + pageNumber}
            </span>
          ) : (
            <span></span>
          )
        )}
        <span style={{ cursor: "pointer" }} onClick={onClickNextPage}>
          다음 페이지
        </span>
      </div>
    </div>
  );
}
