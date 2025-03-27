import { ValidationsHelpers } from "../../utils/helpers/validationsHelpers";

describe("Validador de CPF", () => {
  it("deve validar CPFs corretos", () => {
    const validCPFs = [
      "885.960.060-01",
      "984.427.260-20",
      "503.890.320-77",
      "325.126.020-01",
      "695.258.220-79",
    ];

    validCPFs.forEach((cpf) => {
      expect(ValidationsHelpers.validateCPF(cpf)).toBe(true);
    });
  });

  it("deve invalidar CPFs incorretos", () => {
    const invalidCPFs = [
      "123.456.789-00",
      "111.111.111-11",
      "222.222.222-22",
      "33333333333",
      "000.000.000-00",
      "529.982.247-24",
      "5299822472",
      "529982247256",
      "ABC.DEF.GHI-JK",
    ];

    invalidCPFs.forEach((cpf) => {
      expect(ValidationsHelpers.validateCPF(cpf)).toBe(false);
    });
  });
});

describe("Validador de CNPJ", () => {
  it("deve validar CNPJs corretos", () => {
    const validCNPJs = [
      "11.727.608/0001-39",
      "89.944.512/0001-10",
      "44.061.430/0001-99",
      "51.859.032/0001-88",
      "70.784.900/0001-52",
    ];

    validCNPJs.forEach((cnpj) => {
      expect(ValidationsHelpers.validateCNPJ(cnpj)).toBe(true);
    });
  });

  it("deve invalidar CNPJs incorretos", () => {
    const invalidCNPJs = [
      "11.222.333/0001-22",
      "00.000.000/0000-00",
      "11.111.111/1111-11",
      "36.040.582/0001-08",
      "3604058200010",
      "360405820001091",
      "ABC.DEF.GHI/JKLM-NO",
    ];

    invalidCNPJs.forEach((cnpj) => {
      expect(ValidationsHelpers.validateCNPJ(cnpj)).toBe(false);
    });
  });
});
