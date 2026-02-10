import React from 'react';
import './Button.css';

interface ButtonProps {
  color?: string;
  size?: 'small' | 'medium' | 'large';
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ color = 'blue', size = 'medium', onClick, children }) => {
  const buttonClasses = `Button ${color} ${size}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;