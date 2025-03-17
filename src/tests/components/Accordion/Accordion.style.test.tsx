import { render, screen } from "@testing-library/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui";

const AccordionComponent = ({ disabled }: { disabled: boolean }) => {
  return (
    <Accordion disabled={disabled} type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Texto trigger</AccordionTrigger>
        <AccordionContent>Conteúdo do componente.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

describe("Estilo do Componente Accordion", () => {
  it("renderiza os estilos do componente", () => {
    render(<AccordionComponent disabled={false} />);

    const accordionItem = screen.getByRole("button");
    expect(accordionItem).toHaveClass(
      "flex",
      "flex-1",
      "items-center",
      "cursor-pointer",
      "justify-between",
      "py-4",
      "text-sm",
      "font-medium",
      "transition-all",
      "text-left",
      "[&[data-state=open]>svg]:rotate-180",
      "disabled:cursor-not-allowed",
      "disabled:opacity-50",
      "gap-4"
    );
  });

  it("renderiza o componente com disabled", async () => {
    render(<AccordionComponent disabled />);

    const trigger = screen.getByText("Texto trigger");
    expect(trigger).toBeInTheDocument();
    expect(trigger).toBeDisabled();
  });
});
