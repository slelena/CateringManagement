import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";
import { renderWithRouter } from "@/test/utils";

describe("Button", () => {
  it("renders children", () => {
    renderWithRouter(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const handleClick = vi.fn();
    renderWithRouter(<Button onClick={handleClick}>Click me</Button>);
    await userEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", async () => {
    const handleClick = vi.fn();
    renderWithRouter(
      <Button onClick={handleClick} disabled>
        Click me
      </Button>,
    );
    await userEvent.click(screen.getByText("Click me"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders with danger variant", () => {
    renderWithRouter(<Button variant="danger">Delete</Button>);
    const button = screen.getByText("Delete");
    expect(button.className).toMatch(/danger/);
  });
});
