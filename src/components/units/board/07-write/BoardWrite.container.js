import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { graphqlTest } from "./BoardWrite.queries";

export default function BoardWrite() {
  const [Boards] = useMutation(graphqlTest);
  const [writer, setWriter] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();
  const [isActive, setisActive] = useState();

  const onClickSubmit = async () => {
    const result = await Boards({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
  };

  const ChangeColorEvent = () => {
    if (writer && title && contents) {
      setisActive(true);
    } else {
      setisActive(false);
    }
  };

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
    ChangeColorEvent();
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    ChangeColorEvent();
  };

  const onChangeContents = (e) => {
    setContents(e.target.value);
    ChangeColorEvent();
  };

  return (
    <BoardWriteUI
      onChangeTitle={onChangeTitle}
      onChangeWriter={onChangeWriter}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      isActive={isActive}
    />
  );
}
