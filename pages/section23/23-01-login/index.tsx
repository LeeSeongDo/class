import type { ChangeEvent } from "react";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../src/commons/types/generate/types";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/stores";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    LoginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

// 23-01-로그인
export default function LoginPage(): JSX.Element {
  // 변수
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // change 이벤트
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.currentTarget.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);
  };

  // 클릭 이벤트
  const onClickLogin = async (e): Promise<void> => {
    try {
      // 1. Login 뮤테이션 날려서 엑세스 토큰 가져오기
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });

      const accessToken = result.data?.loginUser?.accessToken;
      console.log(accessToken);

      // 받아온 accessToken을 미니 리덕스에 저장해보자
      if (accessToken === null || accessToken === undefined) {
        alert("로그인 실패... 다시 시도해주세요");
        return;
      }
      setAccessToken(accessToken);

      // 로그인 성공
      void router.push("/section23/23-01-login-success");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <div>
      이메일 :{" "}
      <input
        type="text"
        placeholder="이메일을 적어주세요"
        onChange={onChangePassword}
      />
      비밀번호 : <input type="password" onChange={onChangeEmail} />
      <button onClick={onClickLogin}>로그인</button>
    </div>
  );
}
