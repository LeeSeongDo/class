import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "./PortfolioBoardDetail.graphql";
import PortfolioBoardDetailUI from "./PortfolioBoardDetail.presenter";

export default function PortfolioBoardDetailJS() {
  const router = useRouter();
  console.log(router.query.boardId);
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router?.query?.boardId,
    },
  });

  return (
    <PortfolioBoardDetailUI
      writer={data?.fetchBoard?.writer}
      createdAt={data?.fetchBoard?.createdAt}
      title={data?.fetchBoard?.title}
      contents={data?.fetchBoard?.contents}
      likeCount={data?.fetchBoard?.likeCount}
      dislikeCount={data?.fetchBoard?.dislikeCount}
    />
  );
}
