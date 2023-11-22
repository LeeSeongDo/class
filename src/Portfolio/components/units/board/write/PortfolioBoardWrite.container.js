// js영역
import { useRouter } from "next/router";
import PortfolioBoardNewPageUI from "./PortfolioBoardWrite.presenter";
import { CREATE_BOARD } from "./PortfolioBoardWrite.queries";
import { useState } from "react";
import { useMutation } from "@apollo/client";

export default function PortfolioBoardNewPageContainer() {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [address, setAddress] = useState({
    number: "",
    mainAdd: "",
    subAdd: "",
  });
  const [youtube, setYoutube] = useState("");
  const [writeError, setWriteError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);

  let CheckValues = async () => {
    if (!writer) {
      setWriteError("이름을 입력해주세요");
    }

    if (!password) {
      setPasswordError("비밀번호를 입력해주세요");
    }

    if (!title) {
      setTitleError("제목을 입력해주세요");
    }

    if (!contents) {
      setContentsError("내용을 입력해주세요");
    }

    if (writer && password && title && contents) {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: writer,
            title: title,
            contents: contents,
            password: password,
          },
        },
      });
      console.log(result.data.createBoard._id);
      router.push(`/Portfolio/section02/${result.data.createBoard._id}`);
    }
  };

  const writeWriter = (e) => {
    setWriter(e.target.value);
    setWriteError("");
  };

  const writePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const writeTitle = (e) => {
    setTitle(e.target.value);
    setTitleError("");
  };

  const writeContents = (e) => {
    setContents(e.target.value);
    setContentsError("");
  };

  return (
    <PortfolioBoardNewPageUI
      writeWriter={writeWriter}
      writeError={writeError}
      writePassword={writePassword}
      writeTitle={writeTitle}
      writeContents={writeContents}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      CheckValues={CheckValues}
    />
  );
}
