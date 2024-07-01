import JestUnitTestPage from "../../pages/section34/34-03-unit-test-snapshot";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("내가 원하는대로 그려지는지 테스트", () => {
  const result = render(<JestUnitTestPage />);
  // 이렇게 작성하면 앞으로 snapshot과 비교하게 된다.
  expect(result.container).toMatchSnapshot();
});
