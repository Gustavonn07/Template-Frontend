import { render } from "@testing-library/react";
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbPage, 
  BreadcrumbSeparator, 
  BreadcrumbEllipsis 
} from "../../components/ui"; 

describe("Breadcrumb Component", () => {
  it("deve renderizar o Breadcrumb corretamente", () => {
    const { getByLabelText } = render(<Breadcrumb />);
    expect(getByLabelText("breadcrumb")).toBeInTheDocument();
  });

  it("deve renderizar o BreadcrumbList corretamente", () => {
    const { container } = render(<BreadcrumbList />);
    expect(container.querySelector("ol")).toBeInTheDocument();
  });

  it("deve renderizar um BreadcrumbItem corretamente", () => {
    const { container } = render(<BreadcrumbItem>Item</BreadcrumbItem>);
    expect(container.querySelector("li")).toHaveTextContent("Item");
  });

  it("deve renderizar um BreadcrumbLink corretamente", () => {
    const { getByRole } = render(<BreadcrumbLink href="/home">Home</BreadcrumbLink>);
    expect(getByRole("link")).toHaveAttribute("href", "/home");
  });

  it("deve renderizar um BreadcrumbPage corretamente", () => {
    const { getByText } = render(<BreadcrumbPage>Página Atual</BreadcrumbPage>);
    expect(getByText("Página Atual")).toHaveAttribute("aria-current", "page");
  });

  it("deve renderizar um BreadcrumbSeparator corretamente", () => {
    const { container } = render(<BreadcrumbSeparator />);
    expect(container.querySelector("li")).toBeInTheDocument();
  });

  it("deve permitir um BreadcrumbSeparator customizado", () => {
    const { getByText } = render(<BreadcrumbSeparator>•</BreadcrumbSeparator>);
    expect(getByText("•")).toBeInTheDocument();
  });

  it("deve renderizar o BreadcrumbEllipsis corretamente", () => {
    const { container } = render(<BreadcrumbEllipsis />);
    expect(container.querySelector("span")).toBeInTheDocument();
  });
});
