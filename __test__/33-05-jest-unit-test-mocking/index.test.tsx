import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import StaticRoutedPage from "../../pages/section33/33-05-jest-unit-test-mocking";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import fetch from "cross-fetch";
import mockRouter from "next-router-mock";
// msw , cross-fetch 설치

jest.mock("next/router", () => require("next-router-mock")); // 지금부터 여기에 작성되는 모든것을 가짜로 변경해줘

it("게시글이 잘 등록되는지 테스트", async () => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: "http://mock.com/graphql",
      fetch,
    }),
    cache: new InMemoryCache(),
  });

  render(
    <ApolloProvider client={client}>
      <StaticRoutedPage />
    </ApolloProvider>
  );

  fireEvent.change(screen.getByRole("input-writer"), {
    target: { value: "맹구" },
  });

  fireEvent.change(screen.getByRole("input-title"), {
    target: { value: "안녕하세요" },
  });

  fireEvent.change(screen.getByRole("input-content"), {
    target: { value: "반갑습니다" },
  });

  fireEvent.click(screen.getByRole("submit-button"));

  await waitFor(() => {
    expect(mockRouter.asPath).toEqual("/boards/qqq");
  });
});
