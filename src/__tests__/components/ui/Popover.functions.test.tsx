import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Popover, PopoverTrigger, PopoverContent } from "../../../components";

describe("Popover Component", () => {
  beforeEach(() => {
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Popover Content</PopoverContent>
      </Popover>
    );
  });

  test("deve renderizar o PopoverTrigger corretamente", () => {
    expect(screen.getByText("Open")).toBeInTheDocument();
  });

  test("deve abrir o PopoverContent ao clicar no PopoverTrigger", async () => {
    const trigger = screen.getByText("Open");
    await userEvent.click(trigger);

    expect(screen.getByText("Popover Content")).toBeVisible();
  });

  test("deve fechar o PopoverContent ao clicar fora", async () => {
    const trigger = screen.getByText("Open");
    await userEvent.click(trigger);
    expect(screen.getByText("Popover Content")).toBeVisible();

    await userEvent.click(document.body);
    expect(screen.queryByText("Popover Content")).not.toBeInTheDocument();
  });

  test("deve fechar o PopoverContent ao pressionar a tecla ESC", async () => {
    const trigger = screen.getByText("Open");
    await userEvent.click(trigger);
    expect(screen.getByText("Popover Content")).toBeVisible();

    await userEvent.keyboard("{Escape}");
    expect(screen.queryByText("Popover Content")).not.toBeInTheDocument();
  });
});
