import { render } from "@testing-library/react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "./../../../components";

describe("Tooltip Component", () => {
  it("deve renderizar sem erro", () => {
    const { getByText } = render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
    expect(getByText("Hover me")).toBeInTheDocument();
  });

  it("deve aceitar className personalizado", () => {
    const { container } = render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="custom-class">Hover me</TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
    expect(container.querySelector(".custom-class")).toBeInTheDocument();
  });
});
