import { screen } from "@testing-library/react";
import Toast from "./Toast";
import { renderWithRouter } from "@/test/utils";

describe("Toast", () => {
  it("renders the message when visible", () => {
    renderWithRouter(
      <Toast message="Event saved!" visible={true} onHide={vi.fn()} />,
    );
    expect(screen.getByText("Event saved!")).toBeInTheDocument();
  });

  it("calls onHide after 2500ms", () => {
    vi.useFakeTimers();
    const onHide = vi.fn();
    renderWithRouter(
      <Toast message="Event saved!" visible={true} onHide={onHide} />,
    );
    vi.advanceTimersByTime(2500);
    expect(onHide).toHaveBeenCalledTimes(1);
    vi.useRealTimers();
  });

  it("does not call onHide when not visible", () => {
    vi.useFakeTimers();
    const onHide = vi.fn();
    renderWithRouter(
      <Toast message="Event saved!" visible={false} onHide={onHide} />,
    );
    vi.advanceTimersByTime(2500);
    expect(onHide).not.toHaveBeenCalled();
    vi.useRealTimers();
  });
});
