// 05-01-routing 페이지
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generate/types";
import { useState } from "react";
import FetchPolicyExample from "../../../src/components/units/21-fetch-policy-component";

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

export default function StaticRoutingPage2() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const router = useRouter();

  const test = new Array(10).fill(1);

  const onClickPageNumber = (event: MouseEvent<HTMLSpanElement>): void => {
    refetch({ page: Number(event.currentTarget.id) });
  };
  const [isOpen, setIsOpen] = useState(false);

  const onClickMoved = (): void => {
    router.push("/22-01-fetch-policy-moved");
  };

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        버튼을 클릭하면 새로운 컴포넌트가 생성됩니다.
      </button>
      {isOpen && <FetchPolicyExample></FetchPolicyExample>}
      ===================
      <button onClick={onClickMoved}>페이지 이동하기.</button>
    </div>
  );
}
