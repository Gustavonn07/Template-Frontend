
import React from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export function useApi<DT>() {
    const [loading, setLoading] = React.useState(false)
    const [data, setData] = React.useState<null | DT[]>(null)
    const [error, setError] = React.useState<null | AxiosError>(null)
    const makeRequest = async (config: AxiosRequestConfig): Promise<AxiosResponse<DT> | null> => {
        setLoading(true);
        setError(null); 
        setData(null);

        try {
            const response = await axios(config);
            setData(response.data || null)
            return response;

        } catch (error) {
            const axiosError = error as AxiosError
            setError(axiosError)
            return null;

        } finally {
            setLoading(false)
        }
    };

    return {
        makeRequest,
        data,
        error,
        loading
    };
}

// const useGetSomething = () => {
//     return useApi<[]>((values, params) => {
//         const { method, route } = getEndpoint('', { params }),
//         return httpClient[method](route, { ...values })
//     })
// }

