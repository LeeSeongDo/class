// 33-05

// 05-01-routing 페이지
import { gql } from "@apollo/client";
import { ChangeEvent, MouseEvent } from "react";

import { useState } from "react";
import { useMutation } from "@apollo/client";
import Password from "antd/es/input/Password";
import { useRouter } from "next/router";

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

export default function StaticRoutedPage() {
  const [나의함수] = useMutation(FETCH_BOARDS);
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        createBoardInput: {
          writer,
          title,
          contents,
          Password: "1234",
        },
      },
    });
    console.log(result);
    const boardId = result.data.createBoard._id;
    void router.push(`/boards/${boardId}`);
  };

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>): void => {
    setWriter(e.target.value);
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const onChangeContents = (e: ChangeEvent<HTMLInputElement>): void => {
    setContents(e.target.value);
  };

  return (
    <div>
      <div>
        작성자 :{" "}
        <input role="input-writer" type="text" onChange={onChangeWriter} />
        제목 : <input role="input-title" type="text" onChange={onChangeTitle} />
        내용 :{" "}
        <input role="input-content" type="text" onChange={onChangeContents} />
      </div>
      <button role="submit-button" onClick={onClickSubmit}>
        Graphql API 요청하기
      </button>
    </div>
  );
}
