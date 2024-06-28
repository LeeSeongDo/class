// unit-test 테스트 입니다.
import JestUnitTestPage from "../../pages/section33/33-03-jest-unit-test-snapshot"
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"

// ui 부분을 좀 더 자세하게 테스트 할거라면 스토리북 사용을 권장합니다.

it("기존 사진이랑 바뀐게 없는지 비교하기 - 스냅샷 테스트", () => {
    const result = render(<JestUnitTestPage/>);
    expect(result.container).toMatchSnapshot(); // 사진이 없으면 사진을 찍는다 / 사진이 있으면 사진과 코드를 비교한다.
    // 사진을 업데이트 할거라면 => yarn test -u
})