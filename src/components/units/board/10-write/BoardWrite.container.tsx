import { useMutation } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { graphqlTest, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import { IBoardwriteprops } from "./BoardWrite.types";
import { IMyVariables } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardwriteprops) {
  const [Boards] = useMutation(graphqlTest);
  const [updateBoards] = useMutation(UPDATE_BOARD);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

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
    router.push(
      `/section10/10-02-typescript-board/${result.data.createBoard.number}`
    );
  };

  const onClickUpdate = async () => {
    const myvariables: IMyVariables = {
      number: Number(router.query.number),
    };

    if (title) myvariables.title = title;

    if (writer) myvariables.writer = writer;

    if (contents) myvariables.contents = contents;

    const result = await updateBoards({
      variables: myvariables,
    });
    console.log(result);
    router.push(
      `/section10/10-02-typescript-board/${result.data.updateBoard.number}`
    );
  };

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeContents = (e: ChangeEvent<HTMLInputElement>) => {
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
