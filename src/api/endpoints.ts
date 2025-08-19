/**
 * Representa a configuração de um endpoint da API.
 *
 * @template R Tipo esperado da resposta da API (response data).
 * @template P Tipo do payload enviado na requisição (request body), se houver.
 *
 * @property method Método HTTP que será utilizado para a requisição.
 * @property route Caminho (URL relativa) do endpoint no backend.
 * @property response (Opcional) Tipo esperado da resposta da API (usado apenas para tipagem).
 * @property payload (Opcional) Tipo do corpo enviado na requisição (usado apenas para tipagem).
 *
 * @example
 * // Exemplo de endpoint GET que retorna uma lista de usuários
 * type User = { id: string; name: string };
 *
 * const getUsers = (): EndpointConfig<User[]> => ({
 *   method: "get",
 *   route: "/users",
 * });
 *
 * @example
 * // Exemplo de endpoint POST que cria um usuário
 * const createUser = (): EndpointConfig<User, { name: string }> => ({
 *   method: "post",
 *   route: "/users",
 * });
 */
export type EndpointConfig<R = unknown, P = unknown> = {
  method: "get" | "post" | "put" | "delete" | "patch";
  route: string;
  response?: R;
  payload?: P;
};

/**
 * Conjunto de endpoints da aplicação.
 *
 * Cada função retorna um objeto de configuração (`EndpointConfig`)
 * contendo o método HTTP, a rota e os tipos associados àquele endpoint.
 *
 * @example
 * // Definição de endpoints
 * export const endpoints = {
 *   getUsers: (): EndpointConfig<User[]> => ({
 *     method: "get",
 *     route: "/users",
 *   }),
 *
 *   createUser: (): EndpointConfig<User, { name: string }> => ({
 *     method: "post",
 *     route: "/users",
 *   }),
 *
 *   updateUser: (id: string): EndpointConfig<User, { name: string }> => ({
 *     method: "put",
 *     route: `/users/${id}`,
 *   }),
 * };
 */

export const endpoints = {};
