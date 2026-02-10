import { Component, useState, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
    renderError: (error: Error, errorInfo: ErrorInfo) => ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean,
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        this.setState({
            hasError: true,
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        const { renderError, children } = this.props;
        const { hasError, error, errorInfo } = this.state;

        if (hasError) {
            return renderError(error!, errorInfo!);
        }

        return children;
    }
}

const BuggyContent = () => {
    const [error, setError] = useState<Error | null>(null);

    if (error) {
        throw error;
    }

    return (
        <div>
            Welcome to My App
            <p>This is a simple application.</p>
            <button
                onClick={() => {
                    try {
                        throw new Error('Boom from click!');
                    } catch (err) {
                        setError(err as Error);
                    }
                }}
            >
                Trigger Error
            </button>
        </div>
    );
};

const App: React.FC = () => {
    const renderError = (error: Error, errorInfo: ErrorInfo) => (
        <div>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
                {error.toString()}
                <br />
                {errorInfo.componentStack}
            </details>
        </div>
    );

    return (
        <ErrorBoundary renderError={renderError}>
            <BuggyContent />
        </ErrorBoundary>
    );
};

export default App;