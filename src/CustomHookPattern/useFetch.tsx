import { useState, useEffect } from 'react';
import axios, { type AxiosResponse, AxiosError } from 'axios';

type ApiResponse<T> = {
    data: T | null;
    loading: boolean;
    error: AxiosError | null;
};

function useFetch<T>(url: string): ApiResponse<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<AxiosError | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                const response: AxiosResponse<T> = await axios.get(url, {
                    signal: controller.signal
                });

                setData(response.data);
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    // Ignore abort errors
                    if (err.code !== 'ERR_CANCELED') {
                        setError(err);
                    }
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // Cleanup function
        return () => {
            controller.abort();
        }
    }, [url]);

    return { data, loading, error };
}

export default useFetch;