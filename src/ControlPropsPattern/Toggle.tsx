import React, { useState } from 'react';

interface ToggleProps {
    value: boolean;
    onChange: (value: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ value, onChange }) => {
    return (
        <button onClick={() => onChange(!value)}>
            {value ? 'On' : 'Off'}
        </button>
    );
};

const Example: React.FC = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggleChange = (value: boolean) => {
        setIsToggled(value);
    };

    return (
        <div>
            <h1>Control Props Example</h1>
            <Toggle value={isToggled} onChange={handleToggleChange} />
            <p>The current state is: {isToggled ? 'On' : 'Off'}</p>
        </div>
    );
};

export default Example;