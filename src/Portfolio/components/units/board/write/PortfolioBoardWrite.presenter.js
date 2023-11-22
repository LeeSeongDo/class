// jsx 영역
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
} from "./PortfolioBoardWrite.styles";

export default function PortfolioBoardNewPageUI(props) {
  console.log(props);
  return (
    <Wrapper>
      <Title>게시글 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer
            type="text"
            placeholder="이름을 적어주세요."
            onChange={props.writeWriter}
          />
          <ErrorText>{props.writeError}</ErrorText>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            type="password"
            placeholder="비밀번호를 작성해주세요."
            onChange={props.writePassword}
          />
          <ErrorText>{props.passwordError}</ErrorText>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={props.writeTitle}
        />
        <ErrorText>{props.titleError}</ErrorText>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents
          placeholder="내용을 작성해주세요."
          onChange={props.writeContents}
        />
        <ErrorText>{props.contentsError}</ErrorText>
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
        <SubmitButton onClick={props.CheckValues}>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
