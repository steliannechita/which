import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Main from "./";

describe("Main", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Main />);
    expect(baseElement).toMatchSnapshot();
  });
  it("should correctly select a number when clicked", () => {
    const { getByText } = render(<Main />);
    fireEvent.click(getByText("1"));
    expect(getByText("1")).toHaveClass("with-border");
  });
  it("should correctly highlight multiples of a number", () => {
    const { getByText } = render(<Main />);
    fireEvent.click(getByText("50"));
    expect(getByText("50")).toHaveClass("highlight");
    expect(getByText("100")).toHaveClass("highlight");
  });
});
