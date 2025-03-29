import { render } from "@testing-library/react";
import { Skeleton } from "./../../../components";

describe("Skeleton Component", () => {
  it("deve renderizar sem erro", () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("deve possuir classes padrão", () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toHaveClass("animate-pulse rounded-md bg-primary/10");
  });

  it("deve aceitar className personalizado", () => {
    const { container } = render(<Skeleton className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
