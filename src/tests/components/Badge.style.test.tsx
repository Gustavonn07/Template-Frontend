import { render } from "@testing-library/react";
import { Badge } from "../../components/ui";

describe("Badge Component", () => {
  it("deve renderizar corretamente", () => {
    const { getByText } = render(<Badge>Teste</Badge>);
    expect(getByText("Teste")).toBeInTheDocument();
  });

  it("deve aplicar a classe correspondente à variante", () => {
    const { container } = render(<Badge variant="red">Vermelho</Badge>);
    expect(container.firstChild).toHaveClass("bg-red-600 hover:bg-red-600/80 text-white");
  });

  it("deve usar a variante default se nenhuma for especificada", () => {
    const { container } = render(<Badge>Default</Badge>);
    expect(container.firstChild).toHaveClass("bg-primary-300 hover:bg-primary-300/80 text-primary-900");
  });

  it("deve aceitar className adicional", () => {
    const { container } = render(<Badge className="extra-class">Extra</Badge>);
    expect(container.firstChild).toHaveClass("extra-class");
  });
});
