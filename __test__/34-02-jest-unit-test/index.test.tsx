// unit-test 테스트 입니다.
import JestUnitTestPage from "../../pages/section34/34-02-jest-unit-test";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// 간단한 기능 => it
// 기능 모음을 테스트 => describe

// 처음부터 완벽하게 테스트 할 필요 없다! <핵심만 테스트 하고 그걸 쌓이고 쌓이는 식으로 테스트>

// it("내가 원하는대로 그려지는지 테스트 하기", () => {
//   // 가짜 페이지를 만들기 위해 render에 감싸줘야 합니다.
//   // @testing-library/jest-dom을 import 해주어야 합니다.

// });

it("내가 원하는대로 그려지는지 테스트", () => {
  render(<JestUnitTestPage />);

  const myText1 = screen.getByText("철수는 13살 입니다.");
  expect(myText1).toBeInTheDocument();

  const myText2 = screen.getByText("철수의 취미 입력하기:");
  expect(myText2).toBeInTheDocument();

  const myText3 = screen.getByText("철수랑 놀러가기");
  expect(myText3).toBeInTheDocument();
});
