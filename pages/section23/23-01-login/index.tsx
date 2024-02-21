// login 폴더의 index.tsx _ accessToken global state에 저장해주기
import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";

import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../src/commons/types/generate/types";
import { accessTokenState } from "../../../src/commons/stores";

// login mutation 그래프큐엘 API 호출
const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });

      const accessToken = result.data?.loginUser.accessToken;
      setAccessToken(accessToken);
      router.push("/loginsuccess");
    } catch (error) {
      // 오류 발생시 alert 발생
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <div>
      이메일 : <input type="text" onChange={onChangeEmail} /> <br />
      비밀번호 : <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인하기!!</button>
    </div>
  );
}
