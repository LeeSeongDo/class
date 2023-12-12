import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const graphqlTest = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
    }
  }
`;

export default function GraphqlPage() {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [Boards] = useMutation(graphqlTest);

  const onClickSubmit = async () => {
    const result = await Boards({
      variables: { ...inputs },
    });
    console.log(result);
  };

  const onChangeInputs = (e) => {
    setInputs({
      ...inputs,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        작성자 : <input type="text" id="writer" onChange={onChangeInputs} />
        제목 : <input type="text" id="title" onChange={onChangeInputs} />
        내용 : <input type="text" id="contents" onChange={onChangeInputs} />
      </div>
      <button onClick={onClickSubmit}>Graphql API 요청하기</button>
    </div>
  );
}
