import React from "react";
import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { EndpointConfig } from "../api/endpoints";

/**
 * Hook genérico para realizar requisições HTTP usando Axios.
 *
 * @template R Tipo esperado da resposta da API (response data).
 * @template P Tipo do payload enviado na requisição (request body), se houver.
 *
 * @param client Instância do Axios (pode ser qualquer client configurado).
 *
 * @example
 * // Definição de tipo de usuário
 * type User = { id: string; name: string };
 *
 * // Definição de endpoint
 * const getUsers = (): EndpointConfig<User[]> => ({
 *   method: "get",
 *   route: "/users",
 * });
 *
 * // Uso no componente com client específico
 * const { makeRequest, data, loading } = useRequest<User[]>(adminClient);
 *
 * React.useEffect(() => {
 *   makeRequest(getUsers());
 * }, []);
 */
export function useRequest<R, P = unknown>(client: AxiosInstance) {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<R | null>(null);
  const [error, setError] = React.useState<AxiosError | null>(null);

  /**
   * Executa uma requisição HTTP baseada na configuração do endpoint.
   *
   * @param endpoint Objeto que define o método e a rota da API.
   * @param payload (Opcional) Corpo da requisição (para POST, PUT, PATCH, etc).
   * @param config (Opcional) Configuração adicional do Axios (headers, params, etc).
   *
   * @returns Uma Promise com a resposta do Axios tipada como `AxiosResponse<R>` ou `null` em caso de erro.
   */
  const makeRequest = async (
    endpoint: EndpointConfig<R, P>,
    payload?: P,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<R> | null> => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await client.request<R>({
        method: endpoint.method,
        url: endpoint.route,
        data: payload,
        ...config,
      });

      setData(response.data ?? null);
      return response;
    } catch (err) {
      const axiosError = err as AxiosError;
      setError(axiosError);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { makeRequest, data, error, loading };
}
