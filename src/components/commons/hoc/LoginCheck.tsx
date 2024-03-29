import { useEffect } from "react";
import { useRouter } from "next/router";

export const loginCheck = (Component: any) => (props: any) => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인을 먼저 해주세요");
      void router.push("/section23/23-05-login-check-hoc");
    }
  }, []);

  return <Component {...props} />;
};
