import { render, screen } from "@testing-library/react";
import { RemoveChat } from "../RemoveChat";

describe("Button", () => {
  it("matches snapshot", () => {
    const btn = render(<RemoveChat>{() => <div />}</RemoveChat>);

    expect(btn).toMatchSnapshot();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<RemoveChat onClick={handleClick}>{() => <span>Text</span>}</RemoveChat>);

    const clickable = screen.getByText("Text");
    clickable.click();

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
