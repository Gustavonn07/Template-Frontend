import axios from "axios";
import { customSwallAlert } from './../utils';
import { SwallTypes } from "@/@types";

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Origin: import.meta.env.VITE_API_BASE_URL,
    Accept: 'application/json',
  },
})

httpClient.interceptors.request.use(
  async config => {
    const token = window.localStorage.getItem('auth:token')

    if (token !== null) config.headers.Authorization = `Bearer ${token}`

    return config
  },
  error => Promise.reject(error)
)

httpClient.interceptors.response.use(
  response => response,
  error => {
    const status = error?.response?.status;

    if (status === 401) {
      customSwallAlert({
        title: 'Sessão expirada',
        text: 'Sua sessão foi expirada. Faça login novamente.',
        icon: SwallTypes.ERROR,
        confirmButtonText: 'Fazer login',
        onConfirm: () => {
          localStorage.removeItem('auth:token');
          window.location.href = '/sign-in';
        },
      });
    } else if (status === 403) {
      customSwallAlert({
        title: 'Sem Permissão',
        text: 'Você não tem acesso a essa função.',
        icon: SwallTypes.ERROR,
        confirmButtonText: 'Voltar',
        onConfirm: () => window.history.back(),
      });
    }

    return Promise.reject(error);
  }
);

export default httpClient