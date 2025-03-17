/**
 * Classe utilitária para formatação e manipulação de strings.
 */
class StringHelpers {
  /**
   * Remove todos os caracteres não numéricos de uma string.
   * @param value - A string a ser limpa.
   * @returns A string contendo apenas números.
   */
  static clearValue(value: string): string {
    return value.replace(/[^0-9]+/g, "");
  }

  /**
   * Formata um CPF ou CNPJ com base no tamanho da string.
   * @param value - A string contendo CPF (11 dígitos) ou CNPJ (14 dígitos).
   * @returns A string formatada como CPF ou CNPJ.
   */
  static formatCpfCnpj(value: string): string {
    if (value.length === 11) {
      return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
    return value.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5"
    );
  }

  /**
   * Formata um número de telefone brasileiro.
   * @param value - A string contendo o número de telefone.
   * @returns O número formatado no padrão (XX) XXXXX-XXXX.
   */
  static formatPhone(value: string): string {
    return value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  }

  /**
   * Formata um valor monetário no padrão brasileiro.
   * @param config - Objeto contendo o valor e as opções de formatação.
   * @param config.value - O valor a ser formatado (em centavos).
   * @param config.options - Opções adicionais do Intl.NumberFormat.
   * @returns A string formatada como moeda.
   */
  static formatCurrency(config: {
    value: number;
    options?: Intl.NumberFormatOptions;
  }): string {
    const { value, options } = config;
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      ...options,
    }).format(value / 100);
  }

  /**
   * Formata um valor percentual no padrão brasileiro.
   * @param config - Objeto contendo o valor e as opções de formatação.
   * @param config.value - O valor a ser formatado (ex: 0.25 para 25%).
   * @param config.options - Opções adicionais do Intl.NumberFormat.
   * @returns A string formatada como percentual.
   */
  static formatPercentage(config: {
    value: number;
    options?: Intl.NumberFormatOptions;
  }): string {
    const { value, options } = config;
    return new Intl.NumberFormat("pt-BR", {
      style: "percent",
      maximumFractionDigits: 2,
      ...options,
    }).format(value);
  }

  /**
   * Trunca uma string para o tamanho especificado, adicionando reticências se necessário.
   * @param config - Objeto contendo o texto e o comprimento máximo.
   * @param config.text - O texto a ser truncado.
   * @param config.length - O comprimento máximo da string (padrão: 0).
   * @returns A string truncada.
   */
  static truncateString(config: { text: string; length?: number }): string {
    const { text, length } = config;
    const maxLength = length ?? 0;
    if (text.length > maxLength) return text.substring(0, maxLength) + "...";
    return text;
  }

  /**
   * Gera um UUID aleatório.
   * @returns Uma string no formato UUID v4.
   */
  static get getRandomUuid(): string {
    function randomDigit(): string {
      if (crypto && crypto.getRandomValues) {
        const rands = new Uint8Array(1);

        crypto.getRandomValues(rands);

        return (rands[0] % 16).toString(16);
      } else {
        return ((Math.random() * 16) | 0).toString(16);
      }
    }

    return "xxxxxxxx-xxxx-4xxx-8xxx-xxxxxxxxxxxx".replace(/x/g, randomDigit);
  }
}

export default StringHelpers;