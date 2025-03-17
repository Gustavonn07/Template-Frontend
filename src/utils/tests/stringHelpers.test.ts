import StringHelpers from "../stringHelpers";

describe("StringHelpers", () => {
  it("deve formatar CPF corretamente", () => {
    expect(StringHelpers.formatCpfCnpj("12345678901")).toBe("123.456.789-01");
  });

  it("deve formatar CNPJ corretamente", () => {
    expect(StringHelpers.formatCpfCnpj("12345678000195")).toBe("12.345.678/0001-95");
  });

  it("deve limpar valores não numéricos", () => {
    expect(StringHelpers.clearValue("abc123!@#456")).toBe("123456");
  });

  it("deve formatar valor monetário", () => {
    expect(StringHelpers.formatCurrency({ value: 1000 })).toBe("R$10,00");
  });

  it("deve formatar porcentagem", () => {
    expect(StringHelpers.formatPercentage({ value: 0.25 })).toBe("25%");
  });

  it("deve truncar string", () => {
    expect(StringHelpers.truncateString({ text: "Texto muito longo", length: 10 })).toBe("Texto muit...");
  });

  it("deve gerar um UUID", () => {
    const uuid = StringHelpers.getRandomUuid;
    expect(uuid).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-8[0-9a-f]{3}-[0-9a-f]{12}$/i
    );
  });
});
