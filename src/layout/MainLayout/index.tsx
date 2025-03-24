import React from "react";
import { Outlet } from "react-router-dom";
import { Heading, HeadingProps } from "@/components";

export type mainLayoutContext = {
  setHead: React.Dispatch<React.SetStateAction<HeadingProps>>;
};

export const MainLayout = () => {
  const [head, setHead] = React.useState<HeadingProps>({ title: undefined })

  return (
    <main>
      <Heading title={head?.title} />
      <Outlet context={{ setHead }}/>
    </main>
  );
};
