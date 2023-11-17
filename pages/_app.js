import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장하기
  });

  return (
    <div>
      <div>=======================</div>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
      <div>=======================</div>
    </div>
  );
}
