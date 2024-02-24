// 23-01-로그인-성공
import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../src/commons/types/generate/types";
import { useEffect } from "react";
import { useRouter } from "next/router";

// loginsuccess 폴더의 index.tsx
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
export default function LoginSuccessPage() {
  const router = useRouter();

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인을 먼저 해주세요");
      void router.push("/section23/23-03-login-check");
    }
  }, []);

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다.</div>;
}
