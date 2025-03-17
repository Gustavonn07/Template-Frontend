import { render, screen } from "@testing-library/react";
import { Button } from "../../../components/ui"; 


describe("Estilo do Componente Button", () => {
  it("renderiza o botão com o texto correto", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("aplica a variante 'destructive' corretamente", () => {
    render(<Button variant="destructive">Deletar</Button>);
    const button = screen.getByText("Deletar");
    expect(button).toHaveClass("bg-destructive");
  });

  it("aplica a variante 'success' corretamente", () => {
    render(<Button variant="success">Sucesso</Button>);
    const button = screen.getByText("Sucesso");
    expect(button).toHaveClass("bg-success");
  });

  it("aplica a variante 'default' corretamente", () => {
    render(<Button variant="default">Default</Button>);
    const button = screen.getByText("Default");
    expect(button).toHaveClass("bg-primary-100");
  });

  it("aplica a variante 'outline' corretamente", () => {
    render(<Button variant="outline">Outline</Button>);
    const button = screen.getByText("Outline");
    expect(button).toHaveClass("border-primary-800");
  });

  it("aplica a variante 'secondary' corretamente", () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByText("Secondary");
    expect(button).toHaveClass("bg-secondary-400");
  });

  it("aplica a variante 'ghost' corretamente", () => {
    render(<Button variant="ghost">Ghost</Button>);
    const button = screen.getByText("Ghost");
    expect(button).toHaveClass("hover:bg-primary-100/20");
  });

  it("aplica a variante 'link' corretamente", () => {
    render(<Button variant="link">Link</Button>);
    const button = screen.getByText("Link");
    expect(button).toHaveClass("underline");
  });

  it("renderiza com o tamanho 'default'", () => {
    render(<Button size="default">Default</Button>);
    const button = screen.getByText("Default");
    expect(button).toHaveClass("h-9");
  });

  it("renderiza com o tamanho 'lg'", () => {
    render(<Button size="lg">Large</Button>);
    const button = screen.getByText("Large");
    expect(button).toHaveClass("h-10");
  });

  it("renderiza com o tamanho 'xl'", () => {
    render(<Button size="xl">Extra Large</Button>);
    const button = screen.getByText("Extra Large");
    expect(button).toHaveClass("h-12");
  });

  it("renderiza com o tamanho 'sm'", () => {
    render(<Button size="sm">Small</Button>);
    const button = screen.getByText("Small");
    expect(button).toHaveClass("h-8");
  });

  it("renderiza com o tamanho 'icon'", () => {
    render(<Button size="icon">Icon</Button>);
    const button = screen.getByText("Icon");
    expect(button).toHaveClass("truncate");
  });

  it("desabilita o botão quando 'disabled' é passado", () => {
    render(<Button disabled>Desabilitado</Button>);
    const button = screen.getByText("Desabilitado");
    expect(button).toBeDisabled();
  });
});
