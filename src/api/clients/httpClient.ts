// src/api/clients/httpClient.ts
import axios, { AxiosInstance } from "axios";

/**
 * Instância padrão do Axios configurada como cliente HTTP.
 *
 * Pode ser reutilizado em toda a aplicação, mantendo:
 * - Base URL centralizada
 * - Headers padrão
 * - Interceptors de requisição e resposta
 *
 * @example
 * import { httpClient } from "@/api/clients/httpClient";
 *
 * const response = await httpClient.get("/users");
 * console.log(response.data);
 */
export const httpClient: AxiosInstance = axios.create({
  baseURL: process.env.VITE_API_URL ?? "http://localhost:3000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor de requisição (ex: injetar token de autenticação)
httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor de resposta (tratamento global de erros)
httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      alert("Usuário não autenticado. Redirecionando para login...");
      // window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
