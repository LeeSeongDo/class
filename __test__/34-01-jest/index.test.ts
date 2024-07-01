// index.test.ts 파일 -> 테스트 코드

import { add } from "../../pages/section34/34-01-jest";

// 앞부분 string은 테스트 제목이며, 실패시에 어디서 실패했는지 보여주는 부분이 됩니다.
it("2와 3이 주어졌을 때, 5가 나와야 한다.", () => {
  // 테스트 할 내용 -> 문제도 정답도 본인이 만들어야 합니다.
  const result: number = add(2, 3);
  expect(result).toBe(5);
});

describe("나만의 테스트 그룹!!", () => {
  it("내가 하려는 테스트1", () => {
    const result: number = add(3, 3);
    expect(result).toBe(6);
  });
  it("내가 하려는 테스트1", () => {
    const result: number = add(3, 2);
    expect(result).toBe(5);
  });
});
