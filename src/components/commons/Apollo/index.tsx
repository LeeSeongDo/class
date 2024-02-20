import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { accessTokenState } from "../../../commons/stores";
import { useRecoilState } from "recoil";

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken] = useRecoilState(accessTokenState);

  const UPLOAD_LINK = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Baerer ${accessToken}`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([UPLOAD_LINK]),
    cache: new InMemoryCache(), // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장하기
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
