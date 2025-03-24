import { act } from "react";
import { renderHook } from "@testing-library/react";

import { useViewport } from "../../hooks"; 

describe("useViewport Hook", () => {
  beforeEach(() => {
    Object.defineProperty(window, "innerWidth", { writable: true, value: 1024 });
    Object.defineProperty(window, "innerHeight", { writable: true, value: 768 });
  });

  it("deve retornar as dimensões corretas da tela", () => {
    const { result } = renderHook(() => useViewport());

    expect(result.current.pageWidth).toBe(1024);
    expect(result.current.pageHeight).toBe(768);
  });

  it("deve atualizar largura e altura ao redimensionar a tela", () => {
    const { result } = renderHook(() => useViewport());

    act(() => {
      Object.defineProperty(window, "innerWidth", { writable: true, value: 800 });
      Object.defineProperty(window, "innerHeight", { writable: true, value: 600 });
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current.pageWidth).toBe(800);
    expect(result.current.pageHeight).toBe(600);
  });

  it("deve identificar corretamente os breakpoints", () => {
    const { result } = renderHook(() => useViewport());

    expect(result.current.isSm).toBe(false);
    expect(result.current.isMd).toBe(false);
    expect(result.current.isLg).toBe(true);
    expect(result.current.isXl).toBe(false);
    expect(result.current.is2xl).toBe(false);
  });

  it("deve mudar o breakpoint ao redimensionar", () => {
    const { result } = renderHook(() => useViewport());

    act(() => {
      Object.defineProperty(window, "innerWidth", { writable: true, value: 600 });
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current.isSm).toBe(true);
    expect(result.current.isMd).toBe(false);
    expect(result.current.isLg).toBe(false);
  });
});
