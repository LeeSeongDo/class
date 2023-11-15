import { useState } from "react";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Bool, setBool] = useState(false);

  let SignUp = () => {
    // 1. 검증하기
    if (email.includes("@") === true) {
      if (email.length > 8 && password.length > 8) {
        alert("가입 성공");
        setBool(false);
      }
    } else {
      alert("가입 실패");
      setBool(true);
    }
  };

  return (
    <div>
      <div>
        <span>아이디</span>

        <input
          type="text"
          placeholder="이메일을 입력하세요"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p
          style={
            Bool
              ? { display: "block", color: "red", fontSize: "12px" }
              : { display: "none" }
          }
        >
          아이디를 입력해주세요
        </p>
      </div>

      <div>
        <span>이메일</span>
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p
          style={
            Bool
              ? { display: "block", color: "red", fontSize: "12px" }
              : { display: "none" }
          }
        >
          비밀번호를 입력해주세요
        </p>
      </div>

      <button onClick={SignUp}>회원가입</button>
    </div>
  );
}
