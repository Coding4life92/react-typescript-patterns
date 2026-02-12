import { useState, useEffect, useCallback } from 'react';
import axios, { type AxiosResponse, AxiosError } from 'axios';

type ApiResponse<T> = {
    data: T | null;
    loading: boolean;
    error: AxiosError | null;
    refetch: () => void;
};

function useFetch<T>(url: string): ApiResponse<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<AxiosError | null>(null);
    const [refreshIndex, setRefreshIndex] = useState(0);

    const refetch = useCallback(() => {
        setRefreshIndex(prev => prev + 1);
    }, []);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setLoading(true)
            setError(null);

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
    }, [url, refreshIndex]);

    return { data, loading, error, refetch };
}

export default useFetch;