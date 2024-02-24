import { useQuery, gql } from "@apollo/client";
import {
  IBoard,
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

export default function StaticRoutingPage2() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickBasket = (basket: IBoard) => () => {
    // 기존 장바구니 가져오기
    const baskets: IBoard[] = JSON.parse(
      localStorage.getItem("baskets") === null
        ? "[]"
        : localStorage.getItem("baskets")
    );

    console.log(baskets);

    // 중복 검증하기
    const temp = baskets.filter((el: IBoard) => el._id === basket._id);

    if (temp.length >= 1) {
      alert("이미 담으신 물품입니다.");
      return;
    }

    // 기존 장바구니에 값 추가하기
    baskets.push(basket);

    // 추가된 장바구니로 바꿔주기
    localStorage.setItem("baskets", JSON.stringify(baskets));

    // 만약 장바구니 페이지에서 가져오기를 만들고 싶다면
    // localStorage.getItem() => 프리렌더링 에러
    // useEffect를 사용하세용
  };

  return (
    <div>
      {data?.fetchBoards.map((dd) => (
        <div key={dd?._id}>
          <span style={{ margin: "10px" }}>{dd?.title}</span>
          <span style={{ margin: "10px" }}>{dd?.writer}</span>
          <button onClick={onClickBasket(dd)}>장바구니 담기</button>
        </div>
      ))}
    </div>
  );
}
