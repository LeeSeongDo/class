import { useMutation, gql } from "@apollo/client";

const graphqlTest = gql`
  mutation {
    createBoard(writer: "lee", title: "kk", contents: "vs코드 실습") {
      _id
    }
  }
`;

export default function GraphqlPage(): JSX.Element {
  const [Boards] = useMutation(graphqlTest);

  const onClickSubmit = async (): Promise<void> => {
    const result = await Boards();
    console.log(result);
  };

  const qqq = (비동기함수: () => Promise<void>) => () => {
    void 비동기함수();
  };

  return (
    <div>
      <button onClick={onClickSubmit}>Graphql API 요청하기</button>
    </div>
  );
}
