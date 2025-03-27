import React from "react";
import { useOutletContext } from "react-router-dom";
import { mainLayoutContext } from "@/layout";
import { useSwall } from "./../../hooks";

export const Home = () => {
  const { setHead } = useOutletContext<mainLayoutContext>();

  React.useEffect(() => {
    setHead({ title: "HOME" });
  }, [setHead]);

  const { showInfo, showError, showSuccess, showWarning, showQuestion } =
    useSwall();

  return (
    <div className="flex gap-2">
      <button onClick={() => showInfo()}>
        Show Info
      </button>
      <button onClick={() => showError()}>
        Show Error
      </button>
      <button onClick={() => showSuccess()}>
        Show Success
      </button>
      <button onClick={() => showWarning({title: 'Oi'})}>
        Show Warning
      </button>
      <button onClick={() => showQuestion()}>
        Show Question
      </button>
    </div>
  );
};
