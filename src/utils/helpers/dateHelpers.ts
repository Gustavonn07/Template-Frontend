import { differenceInDays, format, type Locale, parseISO } from "date-fns";
import { ptBR, enUS } from "date-fns/locale";

/**
 * Enum para definir os tipos de localidade suportadas.
 */
export enum LocaleType {
  PT_BR = "ptBr",
  EN_US = "enUs",
}

/**
 * Classe utilitária para formatação e manipulação de datas.
 */
class DateHelpers {
  /**
   * Converte uma string de data para um objeto Date.
   * @param date - Data em formato string ou Date.
   * @returns Objeto Date.
   */
  private static formatDateParam(date: string | Date): Date {
    return typeof date === "string" ? parseISO(date) : date;
  }

  /**
   * Retorna a localidade correspondente ao LocaleType.
   * @param locale - Tipo de localidade (PT_BR ou EN_US).
   * @returns Objeto de localidade do date-fns.
   */
  private static getDateLocale(locale: LocaleType): Locale {
    const locales = {
      [LocaleType.EN_US]: enUS,
      [LocaleType.PT_BR]: ptBR,
    };
    return locales[locale];
  }

  /**
   * Formata uma data no padrão especificado.
   * @param date - Data em formato string ou Date.
   * @param formatMask - Máscara de formatação (padrão: "dd/MM/yyyy").
   * @param locale - Localidade a ser usada (padrão: PT_BR).
   * @returns Data formatada como string.
   */
  static formatDate(
    date: string | Date,
    formatMask: string = "dd/MM/yyyy",
    locale: LocaleType = LocaleType.PT_BR
  ): string {
    const dateObj = this.formatDateParam(date);
    return format(dateObj, formatMask, {
      locale: this.getDateLocale(locale),
    });
  }

  /**
   * Retorna a diferença em dias entre duas datas.
   * @param date1 - Primeira data em formato string ou Date.
   * @param date2 - Segunda data em formato string ou Date.
   * @returns Número de dias entre as datas.
   */
  static getDaysDifference(date1: string | Date, date2: string | Date): number {
    const dateObj1 = this.formatDateParam(date1);
    const dateObj2 = this.formatDateParam(date2);

    return differenceInDays(dateObj1, dateObj2);
  }
}

export default DateHelpers;