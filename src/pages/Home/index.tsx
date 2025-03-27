import React from "react";
import { useOutletContext } from "react-router-dom";
import { mainLayoutContext } from "@/layout";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { setHead } = useOutletContext<mainLayoutContext>();
  const { t } = useTranslation()

  React.useEffect(() => {
    setHead({ title: "HOME" });
  }, [setHead]);


  return (
    <div className="flex gap-2">
      {t('global.hello')}
    </div>
  );
};
