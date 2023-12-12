// 05-01-routing 페이지
import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generate/types";
import InfiniteScroll from "react-infinite-scroller";

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

export default function StaticRoutingPage2(): JSX.Element {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onLoadMore = (): void => {
    if (data === undefined) return;

    void fetchMore({
      variables: { page: Math.ceil((data?.fetchBoards.length ?? 10) / 10) + 1 },
      updateQuery(previousQueryResult, { fetchMoreResult }) {
        if (fetchMoreResult.fetchBoards === undefined) {
          return {
            fetchBoards: [...previousQueryResult.fetchBoards],
          };
        }

        return {
          fetchBoards: [
            ...previousQueryResult.fetchBoards,
            ...fetchMoreResult.fetchBoards,
          ],
        };
      },
    });
  };

  return (
    <div>
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        <div>
          {data?.fetchBoards.map((dd) => (
            <div key={dd?._id}>
              <span style={{ margin: "10px" }}>{dd?.title}</span>
              <span style={{ margin: "10px" }}>{dd?.writer}</span>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
