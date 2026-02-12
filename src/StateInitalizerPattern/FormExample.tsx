import React, { useState } from 'react';

interface FormState {
    username: string;
    password: string;
}

// Custom hook to handle form state
const useFormState = (): [FormState, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
    // Initial state of the form
    const initialFormState: FormState = {
        username: '',
        password: ''
    };

    const [formState, setFormState] = useState<FormState>(initialFormState);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return [formState, handleInputChange];
};

const FormExample: React.FC = () => {
    const [formState, handleInputChange] = useFormState();

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formState);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formState.username}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="text"
                    id="password"
                    name="password"
                    value={formState.password}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormExample;