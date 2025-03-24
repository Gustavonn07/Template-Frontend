import DateHelpers, { LocaleType } from "../dateHelpers";

describe("formatDate", () => {
  it("deve formatar a data para o padrão dd/MM/yyyy por padrão", () => {
    const date = new Date("2025-03-17T00:00:00-03:00");
    const result = DateHelpers.formatDate(date);
    expect(result).toBe("17/03/2025");
  });

  it("deve formatar a data com um formato personalizado", () => {
    const date = new Date("2025-03-17T00:00:00-03:00");
    const result = DateHelpers.formatDate(date, "yyyy-MM-dd");
    expect(result).toBe("2025-03-17");
  });

  it("deve formatar a data no locale EN_US", () => {
    const date = new Date("2025-03-17T00:00:00-03:00");
    const result = DateHelpers.formatDate(
      date,
      "MMMM dd, yyyy",
      LocaleType.EN_US
    );
    expect(result).toBe("March 17, 2025");
  });
});

describe("getDaysDifference", () => {
  it("deve retornar a diferença correta entre duas datas", () => {
    const date1 = new Date("2025-03-17T00:00:00Z");
    const date2 = new Date("2025-03-15T00:00:00Z");
    const result = DateHelpers.getDaysDifference(date1, date2);
    expect(result).toBe(2);
  });

  it("deve retornar um número negativo se a segunda data for maior", () => {
    const date1 = new Date("2025-03-15T00:00:00Z");
    const date2 = new Date("2025-03-17T00:00:00Z");
    const result = DateHelpers.getDaysDifference(date1, date2);
    expect(result).toBe(-2);
  });

  it("deve retornar 0 se as datas forem iguais", () => {
    const date = new Date("2025-03-17T00:00:00Z");
    const result = DateHelpers.getDaysDifference(date, date);
    expect(result).toBe(0);
  });
});
