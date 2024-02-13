// 05-01-routing 페이지
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { ChangeEvent, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generate/types";
import { useState } from "react";
import _ from "lodash";
import { v4 } from "uuid";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingPage2() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const [keyword, setKeyword] = useState();

  const test = new Array(10).fill(1);

  const onClickPageNumber = (event: MouseEvent<HTMLSpanElement>): void => {
    refetch({ page: Number(event.currentTarget.id) });
  };

  const getDebounce = _.debounce((e) => {
    void refetch({ search: e.target.value, page: 1 });
    setKeyword(e.target.value);
  }, 500);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    getDebounce(e);
  };

  return (
    <div>
      검색어 입력. <input type="text" onChange={onChangeSearch} />
      {data?.fetchBoards.map((dd) => (
        <div key={dd?._id}>
          <span style={{ margin: "10px" }}>
            {dd?.title
              .replaceAll(keyword, `$#${keyword}$#`)
              .split("$#")
              .map((el) => (
                <span
                  key={v4()}
                  style={{ color: el === keyword ? "red" : "black" }}
                >
                  {el}
                </span>
              ))}
          </span>
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
