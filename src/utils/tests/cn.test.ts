import { cn } from "../cn";

describe("cn function", () => {
  it("combina classes simples", () => {
    expect(cn("bg-red-500", "text-white", "px-4"))
      .toBe("bg-red-500 text-white px-4");
  });

  it("combina classes condicionais", () => {
    expect(cn("bg-red-500", true && "text-white", "px-4"))
      .toBe("bg-red-500 text-white px-4");
  });

  it("remove conflitos do TailwindCSS", () => {
    expect(cn("text-red-500", "text-blue-500"))
      .toBe("text-blue-500");
  });

  it("lida com valores falsy", () => {
    expect(cn("bg-red-500", false && "text-white", "px-4"))
      .toBe("bg-red-500 px-4");
  });

  it("lida com valores nulos ou undefined", () => {
    expect(cn("bg-red-500", null, undefined, "px-4"))
      .toBe("bg-red-500 px-4");
  });

  it("retorna string vazia quando nenhum valor é passado", () => {
    expect(cn()).toBe("");
  });
});
