// 23-01-로그인-성공
import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../src/commons/types/generate/types";

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
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다.</div>;
}
