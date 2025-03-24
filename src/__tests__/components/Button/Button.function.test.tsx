import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../../../components/ui";
import { cn } from "../../../utils";

describe("Funcionalidades do Componente Button", () => {
  it("dispara evento de clique", async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clique</Button>);

    const button = screen.getByText("Clique");
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renderiza o componente como asChild", () => {
    const CustomComponent = ({ children }: { children: React.ReactNode }) => (
      <span>{children}</span>
    );
  
    const { getByText } = render(
      <Button asChild>
        <CustomComponent>Conteúdo customizado</CustomComponent>
      </Button>
    );
  
    expect(getByText("Conteúdo customizado")).toBeInTheDocument();
  });

  it("recebe as classes customizadas", () => {
    render(<Button className={cn("bg-red-200")}>Clique</Button>);

    const button = screen.getByText("Clique");
    expect(button).toHaveClass("bg-red-200");
  });

  it("deve receber um ícone de 'tabler:dots' na esquerda", () => {
    render(
      <Button
        options={{
          iconOptions: {
            icon: "tabler:dots",
            position: "left",
          },
        }}
      >
        Esquerda
      </Button>
    );

    const icon = screen.getByTestId("button-icon-left");

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("data-icon", "tabler:dots");
  });

  it("deve receber um ícone de 'tabler:dots' na direita", () => {
    render(
      <Button
        options={{
          iconOptions: {
            icon: "tabler:dots",
            position: "right",
          },
        }}
      >
        Direita
      </Button>
    );

    const icon = screen.getByTestId("button-icon-right");

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("data-icon", "tabler:dots");
  });
});
