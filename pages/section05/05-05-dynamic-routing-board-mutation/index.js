import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

const graphqlTest = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
    }
  }
`;

export default function GraphqlPage() {
  const [Boards] = useMutation(graphqlTest);

  const router = useRouter();

  const onClickSubmit = async () => {
    const result = await Boards({
      variables: {
        writer: "이성훈",
        title: "지금 보냅니다.",
        contents: "전송 합니다.",
      },
    });
    router.push(
      `/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`
    );
  };

  return (
    <div>
      <button onClick={onClickSubmit}>Graphql API 요청하기</button>
    </div>
  );
}
