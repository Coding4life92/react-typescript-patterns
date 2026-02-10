import React, { useState } from "react";
import './App.css';

interface FormValues {
    [key: string]: string;
}

interface WithFormProps {
    onFormSubmit: (values: FormValues) => void;
}

interface InjestedFormProps {
    formValues: FormValues;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

// HOC that handles form state and logic
function withForm<T extends WithFormProps>(WrappedComponent: React.ComponentType<T & InjestedFormProps>) {
    const WithForm: React.FC<T> = (props) => {
        const [formValues, setFotmValues] = useState<FormValues>({});

        const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = event.target;
            setFotmValues((prevState) => ({
                ...prevState,
                [name]: value
            }));
        };

        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            props.onFormSubmit(formValues);
        };

        return (
            <WrappedComponent
                {...props}
                formValues={formValues}
                onInputChange={handleInputChange}
                onSubmit={handleSubmit}
            />
        );
    };

    return WithForm;
}

// Component that uses the HOC to manage a form.
interface MyFormProps extends InjestedFormProps { }

const MyForm: React.FC<MyFormProps> = ({ formValues, onInputChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={formValues.name || ''} onChange={onInputChange} />

            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={formValues.email || ''} onChange={onInputChange} />

            <button type="submit">Submit</button>
        </form>
    );
};

// Using the HOC to wrap the MyForm component
const FormWithLogic = withForm(MyForm);

// Main component that renders the form
const App: React.FC = () => {
    const handleFormSubmit = (values: FormValues) => {
        console.log('Form values:', values);
    };

    return (
        <div className="App">
            <h1>HOC Form</h1>
            <FormWithLogic onFormSubmit={handleFormSubmit} />
        </div>
    );
};

export default App;