import React from "react";
import { useOutletContext } from "react-router-dom";
import { mainLayoutContext } from "@/layout";

export const Home = () => {
  const { setHead } = useOutletContext<mainLayoutContext>();

  React.useEffect(() => {
    setHead({ title: "HOME" });
  }, [setHead]);

  return <div>Olá Mundo!</div>;
};
