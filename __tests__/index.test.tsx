import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    // const heading = screen.getByRole("heading", {
    //   name: /welcome to devops!/i,
    // });

    expect(heading).toBeInTheDocument();
  });
});
