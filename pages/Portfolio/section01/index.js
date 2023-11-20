import {
  Address,
  ButtonWrapper,
  Contents,
  ErrorText,
  ImageWrapper,
  InputWrapper,
  Label,
  OptionWrapper,
  Password,
  RadioButton,
  RadioLabel,
  SearchButton,
  Subject,
  SubmitButton,
  Title,
  UploadButton,
  Wrapper,
  Writer,
  WriterWrapper,
  Youtube,
  Zipcode,
  ZipcodeWrapper,
} from "../../../styles/01-portfolio";

import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
    }
  }
`;

export default function BoardsNewPage() {
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

  const onClickSubmit = async () => {
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
    console.log(result);
  };

  function CheckValues() {
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

    if (
      writer.length > 0 &&
      password.length > 0 &&
      title.length > 0 &&
      contents.length > 0
    ) {
      onClickSubmit();
    }
  }

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
    <Wrapper>
      <Title>게시글 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer
            type="text"
            placeholder="이름을 적어주세요."
            onChange={writeWriter}
          />
          <ErrorText>{writeError}</ErrorText>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            type="password"
            placeholder="비밀번호를 작성해주세요."
            onChange={writePassword}
          />
          <ErrorText>{passwordError}</ErrorText>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={writeTitle}
        />
        <ErrorText>{titleError}</ErrorText>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents placeholder="내용을 작성해주세요." onChange={writeContents} />
        <ErrorText>{contentsError}</ErrorText>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode
            placeholder="07250"
            onChange={(e) => setAddress({ ...address, number: e.target.value })}
          />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <Address
          onChange={(e) => setAddress({ ...address, mainAdd: e.target.value })}
        />
        <Address
          onChange={(e) => setAddress({ ...address, subAdd: e.target.value })}
        />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube
          placeholder="링크를 복사해주세요."
          onChange={(e) => setYoutube(e.target.value)}
        />
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <RadioButton type="radio" id="youtube" name="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        <SubmitButton onClick={CheckValues}>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
