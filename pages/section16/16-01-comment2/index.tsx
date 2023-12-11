// 05-01-routing 페이지
import { useQuery, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generate/types";

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

  const [myIndex, setMyIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const onClickEdit = (e: MouseEvent<HTMLButtonElement>): void => {
    // 배열복사는 얕은복사 후 setState를 해주기
    const qqq = [...myIndex];
    qqq[Number(e.currentTarget.id)] = true;
    setMyIndex(qqq);
  };

  return (
    <div>
      {data?.fetchBoards.map((dd, index) =>
        myIndex[index] === false ? (
          <div key={dd?._id}>
            <span style={{ margin: "10px" }}>{dd?.title}</span>
            <span style={{ margin: "10px" }}>{dd?.writer}</span>
            <button id={String(index)} onClick={onClickEdit}>
              수정하기
            </button>
          </div>
        ) : (
          <input type="text" key={dd?._id} />
        )
      )}
    </div>
  );
}
