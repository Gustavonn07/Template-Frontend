import React from "react";
import { useOutletContext } from "react-router-dom";
import { mainLayoutContext } from "@/layout";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components";

export const Home = () => {
  const { setHead } = useOutletContext<mainLayoutContext>();

  React.useEffect(() => {
    setHead({ title: "HOME" });
  }, [setHead]);

  return (
    <div className="w-full bg-red-200 flex justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
