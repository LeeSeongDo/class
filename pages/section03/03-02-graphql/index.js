import RestPage from "../03-01-rest-api";
import { useMutation, gql } from "@apollo/client";

const graphqlTest = gql`
  mutation {
    createBoard(writer: "lee", title: "kk", contents: "vs코드 실습") {
      _id
    }
  }
`;

export default function GraphqlPage() {
  const [Boards] = useMutation(graphqlTest);

  const onClickSubmit = async () => {
    const result = await Boards();
    console.log(result);
  };

  return (
    <div>
      <button onClick={onClickSubmit}>Graphql API 요청하기</button>
    </div>
  );
}
