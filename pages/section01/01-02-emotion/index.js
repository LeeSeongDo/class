import { DivStyle, InputStyle, MyEmail } from "../../../styles/01-02-emotion";

// css-in-js 실습해보기.
export default function EmotionPages() {
  // 여기는 자바스크립트 쓰는 곳.

  return (
    <div>
      <DivStyle>
        <MyEmail>아이디 : </MyEmail>
        <InputStyle type="text" placeholder="아이디를 입력해주세요" />
      </DivStyle>

      <DivStyle>
        <MyEmail>비밀번호 : </MyEmail>
        <InputStyle type="password" placeholder="비밀번호를 입력해주세요" />
      </DivStyle>
    </div>
  );
}
