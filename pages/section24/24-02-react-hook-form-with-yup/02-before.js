import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

export default function GraphqlPage() {
  const [writer, setWriter] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  return (
    <div>
      <div>
        작성자 : <input type="text" onChange={onChangeWriter} />
        제목 : <input type="text" onChange={onChangeTitle} />
        내용 : <input type="text" onChange={onChangeContents} />
      </div>
      <button>Graphql API 요청하기</button>
    </div>
  );
}
