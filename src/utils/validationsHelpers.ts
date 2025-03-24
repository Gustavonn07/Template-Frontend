export class ValidationsHelpers {
  /**
   * Valida um CPF verificando os dígitos verificadores.
   * @param {string} cpf - O CPF a ser validado.
   * @returns {boolean} - Retorna `true` se o CPF for válido, caso contrário, `false`.
   */
  public static validateCPF(cpf: string): boolean {
    const cleanCPF = cpf.replace(/\D/g, "");
    if (cleanCPF.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(cleanCPF)) return false;
    const cpfArray = cleanCPF.split("").map(Number);

    const calcDigit = (slice: number[]) => {
      const sum = slice.reduce(
        (acc, val, index) => acc + val * (slice.length + 1 - index),
        0
      );
      const remainder = (sum * 10) % 11;
      return remainder === 10 ? 0 : remainder;
    };

    const digit1 = calcDigit(cpfArray.slice(0, 9));
    const digit2 = calcDigit(cpfArray.slice(0, 10));

    return digit1 === cpfArray[9] && digit2 === cpfArray[10];
  }

  /**
   * Valida um CNPJ verificando os dígitos verificadores.
   * @param {string} cnpj - O CNPJ a ser validado.
   * @returns {boolean} - Retorna `true` se o CNPJ for válido, caso contrário, `false`.
   */
  public static validateCNPJ(cnpj: string): boolean {
    const cleanCNPJ = cnpj.replace(/\D/g, "");
    if (cleanCNPJ.length !== 14) return false;
    if (/^(\d)\1{13}$/.test(cleanCNPJ)) return false;
    const cnpjArray = cleanCNPJ.split("").map(Number);

    const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    const calcDigit = (slice: number[], weights: number[]) => {
      const sum = slice.reduce(
        (acc, val, index) => acc + val * weights[index],
        0
      );
      const remainder = sum % 11;
      return remainder < 2 ? 0 : 11 - remainder;
    };

    const digit1 = calcDigit(cnpjArray.slice(0, 12), weights1);
    const digit2 = calcDigit(cnpjArray.slice(0, 13), weights2);

    return digit1 === cnpjArray[12] && digit2 === cnpjArray[13];
  }
}
