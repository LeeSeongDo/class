// 23-01-로그인-성공
import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../src/commons/types/generate/types";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginSuccess(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  console.log(data);
  
  return (
    <div>
      <span>님 환영합니다.</span>
    </div>
  );
}
