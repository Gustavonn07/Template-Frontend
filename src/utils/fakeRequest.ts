import { getHttpStatus, HttpStatus, MetaResponseType } from "../@types";
import { AxiosResponse } from "axios";

/**
 * Simula uma requisição assíncrona retornando uma resposta no formato do Axios.
 *
 * @template T - Tipo dos dados retornados na resposta.
 * @param {Object} params - Parâmetros da requisição fake.
 * @param {T} params.data - Os dados a serem retornados na resposta.
 * @param {number} [params.time=2000] - Tempo (em milissegundos) até a resposta ser resolvida.
 * @param {HttpStatus} [params.status=HttpStatus.OK] - Código de status HTTP da resposta.
 * @param {MetaResponseType} [params.meta] - Metadados opcionais da resposta.
 * @returns {Promise<AxiosResponse<T> & { meta?: MetaResponseType }>} - Uma Promise que resolve com a resposta simulada.
 *
 * @example
 * fakeRequest<string[]>({
 *   data: ["item1", "item2"],
 *   time: 1000,
 *   status: HttpStatus.OK,
 *   meta: { requestTime: "2025-03-24T12:00:00Z", executionTime: 150 }
 * }).then(console.log);
 */
export function fakeRequest<T>({
  data,
  time = 2000,
  status = HttpStatus.OK,
  meta,
}: {
  data: T;
  time?: number;
  status?: HttpStatus;
  meta?: MetaResponseType;
}): Promise<AxiosResponse<T> & { meta?: MetaResponseType }> {
  const response = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data,
        status,
        statusText: getHttpStatus(status),
        meta: meta ?? [],
        headers: {},
        config: {},
      });
    }, time);
  });
  return response as Promise<AxiosResponse<T> & { meta?: MetaResponseType }>;
}
