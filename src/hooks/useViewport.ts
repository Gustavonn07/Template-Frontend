import React from "react";

/**
 * Hook personalizado para obter as dimensões da tela e pontos de breakpoints.
 * @returns {{
*   pageWidth: number;
*   pageHeight: number;
*   isSm: boolean;
*   isMd: boolean;
*   isLg: boolean;
*   isXl: boolean;
*   is2xl: boolean;
* }} Retorna as dimensões da tela e booleanos indicando os breakpoints.
*/
export const useViewport = () => {
  const [pageWidth, setPageWidth] = React.useState<number>(window.innerWidth);
  const [pageHeight, setPageHeight] = React.useState<number>(
    window.innerHeight
  );

  React.useEffect(() => {
    const handleResize = () => {
      setPageWidth(window.innerWidth);
      setPageHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    pageWidth,
    pageHeight,
    isSm: pageWidth <= 640,
    isMd: pageWidth > 640 && pageWidth <= 768,
    isLg: pageWidth > 768 && pageWidth <= 1024,
    isXl: pageWidth > 1024 && pageWidth <= 1280,
    is2xl: pageWidth >= 1536,
  };
};
