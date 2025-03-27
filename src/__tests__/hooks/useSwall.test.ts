import { renderHook, act } from "@testing-library/react";
import { useSwall } from "../../hooks/useSwall";
import { SwallTypes } from "../../@types";
import { customSwallAlert } from "../../utils";

jest.mock("../../utils", () => ({
  customSwallAlert: jest.fn(),
}));

describe("Hook useSwall", () => {
  test("Deve exibir um alerta de informação", () => {
    const { result } = renderHook(() => useSwall());
    
    act(() => {
      result.current.showInfo({ title: "Info", text: "Mensagem de informação" });
    });

    expect(customSwallAlert).toHaveBeenCalledWith({
      title: "Info",
      text: "Mensagem de informação",
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      showCancelButton: false,
      icon: SwallTypes.INFO,
      onConfirm: undefined,
      onCancel: undefined,
    });
  });

  test("Deve exibir um alerta de erro", () => {
    const { result } = renderHook(() => useSwall());
    
    act(() => {
      result.current.showError({ title: "Erro", text: "Mensagem de erro" });
    });

    expect(customSwallAlert).toHaveBeenCalledWith({
      title: "Erro",
      text: "Mensagem de erro",
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      showCancelButton: false,
      icon: SwallTypes.ERROR,
      onConfirm: undefined,
      onCancel: undefined,
    });
  });

  test("Deve exibir um alerta de sucesso", () => {
    const { result } = renderHook(() => useSwall());
    
    act(() => {
      result.current.showSuccess({ title: "Sucesso", text: "Mensagem de sucesso" });
    });

    expect(customSwallAlert).toHaveBeenCalledWith({
      title: "Sucesso",
      text: "Mensagem de sucesso",
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      showCancelButton: false,
      icon: SwallTypes.SUCCESS,
      onConfirm: undefined,
      onCancel: undefined,
    });
  });

  test("Deve exibir um alerta de aviso", () => {
    const { result } = renderHook(() => useSwall());
    
    act(() => {
      result.current.showWarning({ title: "Aviso", text: "Mensagem de aviso" });
    });

    expect(customSwallAlert).toHaveBeenCalledWith({
      title: "Aviso",
      text: "Mensagem de aviso",
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      showCancelButton: false,
      icon: SwallTypes.WARNING,
      onConfirm: undefined,
      onCancel: undefined,
    });
  });

  test("Deve exibir um alerta de pergunta", () => {
    const { result } = renderHook(() => useSwall());
    
    act(() => {
      result.current.showQuestion({ title: "Pergunta", text: "Mensagem de pergunta" });
    });

    expect(customSwallAlert).toHaveBeenCalledWith({
      title: "Pergunta",
      text: "Mensagem de pergunta",
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      showCancelButton: false,
      icon: SwallTypes.QUESTION,
      onConfirm: undefined,
      onCancel: undefined,
    });
  });
});
