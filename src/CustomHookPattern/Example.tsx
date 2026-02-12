import React, { useEffect, useState } from 'react';
import useFetch from './useFetch';

type Joke = {
    id: number;
    type: string;
    setup: string;
    punchline: string;
};

const Joke: React.FC = () => {
    const { data, loading, error, refetch } = useFetch<Joke>(
        'https://official-joke-api.appspot.com/random_joke'
    );

    const [showPunchline, setShowPunchline] = useState(false);

    // Reset punchline when new joke loads
    useEffect(() => {
        setShowPunchline(false);
    }, [data]);

    if (loading) return <p>Loading joke...</p>
    if (error) return <p>Something went wrong</p>
    if (!data) return null;

    return (
        <div style={{ marginBottom: '2rem' }}>
            <h2>{data.setup}</h2>

            {showPunchline && (
                <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>
                    {data.punchline}
                </p>
            )}

            <div style={{ marginTop: '1rem' }}>
                {!showPunchline ? (
                    <button onClick={() => setShowPunchline(true)}>
                        Reveal Punchline
                    </button>
                ) : (
                    <button onClick={refetch}>
                        Get New Joke
                    </button>
                )}
            </div>
        </div>
    );
};

export default Joke;