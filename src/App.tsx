import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/Accordion";
import "./style.css";
function App() {
  return (
    <>
      <div className="w-full flex justify-center items-center h-screen gap-10">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}

export default App;
