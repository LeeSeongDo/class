import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { graphqlTest, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const [Boards] = useMutation(graphqlTest);
  const [updateBoards] = useMutation(UPDATE_BOARD);
  const [writer, setWriter] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  const router = useRouter();

  const onClickSubmit = async () => {
    const result = await Boards({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    router.push(`/section09/09-04-boards/${result.data.createBoard.number}`);
  };

  const onClickUpdate = async () => {
    const myvariables = {
      number: Number(router.query.number),
    };

    if (title) myvariables.title = title;

    if (writer) myvariables.writer = writer;

    if (contents) myvariables.contents = contents;

    const result = await updateBoards({
      variables: myvariables,
    });
    console.log(result);
    router.push(`/section09/09-04-boards/${result.data.updateBoard.number}`);
  };

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
    <BoardWriteUI
      onChangeTitle={onChangeTitle}
      onChangeWriter={onChangeWriter}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data} // undefined 이거나 data이거나 둘중하나.
    />
  );
}
