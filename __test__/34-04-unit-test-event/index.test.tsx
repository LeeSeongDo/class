import CounterStatePage from "../../pages/section34/34-04-unit-test-event";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("기능 테스트!", () => {
  render(<CounterStatePage />);
  fireEvent.click(screen.getByRole("count-button"));
  expect(screen.getByRole("count")).toHaveTextContent("1");
});
