import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";
import { renderWithRouter } from "@/test/utils";

describe("Modal", () => {
  it("does not render when closed", () => {
    renderWithRouter(
      <Modal title="Add Event" isOpen={false} onClose={vi.fn()}>
        <p>Form content</p>
      </Modal>,
    );
    expect(screen.queryByText("Add Event")).not.toBeInTheDocument();
  });

  it("renders title and content when open", () => {
    renderWithRouter(
      <Modal title="Add Event" isOpen={true} onClose={vi.fn()}>
        <p>Form content</p>
      </Modal>,
    );
    expect(screen.getByText("Add Event")).toBeInTheDocument();
    expect(screen.getByText("Form content")).toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", async () => {
    const onClose = vi.fn();
    renderWithRouter(
      <Modal title="Add Event" isOpen={true} onClose={onClose}>
        <p>Form content</p>
      </Modal>,
    );
    await userEvent.click(screen.getByRole("button", { name: "✕" }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when Escape key is pressed", async () => {
    const onClose = vi.fn();
    renderWithRouter(
      <Modal title="Add Event" isOpen={true} onClose={onClose}>
        <p>Form content</p>
      </Modal>,
    );
    await userEvent.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("does not call onClose when clicking inside the modal", async () => {
    const onClose = vi.fn();
    renderWithRouter(
      <Modal title="Add Event" isOpen={true} onClose={onClose}>
        <p>Form content</p>
      </Modal>,
    );
    await userEvent.click(screen.getByText("Form content"));
    expect(onClose).not.toHaveBeenCalled();
  });
});
