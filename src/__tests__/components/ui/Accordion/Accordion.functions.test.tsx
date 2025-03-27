import { render, screen, waitFor } from "@testing-library/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui";
import userEvent from "@testing-library/user-event";

describe("Funções do Componente Accordion", () => {
  it("renderiza o componente com os textos corretos", async () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Texto trigger</AccordionTrigger>
          <AccordionContent>Conteúdo do componente.</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByText("Texto trigger");
    expect(trigger).toBeInTheDocument();
    await userEvent.click(trigger);

    await waitFor(() => {
      expect(screen.getByText("Conteúdo do componente.")).toBeInTheDocument();
    });
  });
});
