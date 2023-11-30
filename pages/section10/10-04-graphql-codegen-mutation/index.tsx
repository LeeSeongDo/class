import { useMutation, gql } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../src/commons/types/generate/types";

const graphqlTest = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
    }
  }
`;

export default function GraphqlPage() {
  // const [Boards] = useMutation<결과타입, 변수타입>(graphqlTest);
  const [Boards] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(graphqlTest);
  const onClickSubmit = async () => {
    const result = await Boards({
      variables: {
        writer: "llll",
        title: "llllll",
        contents: "llllll",
      },
    });
    console.log(result);
  };

  return (
    <div>
      <button onClick={onClickSubmit}>Graphql API 요청하기</button>
    </div>
  );
}
