import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../../../components";

describe("Dialog Component", () => {
  it("deve renderizar o trigger corretamente", () => {
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
      </Dialog>
    );

    expect(screen.getByText("Open Dialog")).toBeInTheDocument();
  });

  it("deve abrir e fechar o dialog corretamente", async () => {
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>Dialog Description</DialogDescription>
          <DialogClose>Close Dialog</DialogClose>
        </DialogContent>
      </Dialog>
    );
    expect(screen.queryByText("Dialog Title")).not.toBeInTheDocument();
    await userEvent.click(screen.getByText("Open Dialog"));

    expect(screen.getByText("Dialog Title")).toBeInTheDocument();
    expect(screen.getByText("Dialog Description")).toBeInTheDocument();

    await userEvent.click(screen.getByText("Close Dialog"));
    expect(screen.queryByText("Dialog Title")).not.toBeInTheDocument();
  });

  it("deve fechar o dialog ao pressionar a tecla Escape", async () => {
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent aria-describedby={undefined}>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogClose>Close</DialogClose>
        </DialogContent>
      </Dialog>
    );

    await userEvent.click(screen.getByText("Open Dialog"));
    expect(screen.getByText("Dialog Title")).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape", code: "Escape" });
    expect(screen.queryByText("Dialog Title")).not.toBeInTheDocument();
  });

  it("deve manter o foco no primeiro elemento interativo ao abrir", async () => {
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent aria-describedby={undefined}>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogClose>Close Dialog</DialogClose>
        </DialogContent>
      </Dialog>
    );

    await userEvent.click(screen.getByText("Open Dialog"));
    expect(screen.getByText("Close Dialog")).toHaveFocus();
  });
});
