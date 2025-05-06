// src/components/Button.jsx
import React from 'react';
import './Button.css';

const Button = ({ label, variant = 'default' }) => {
    return <button className={`btn ${variant}`}>{label}</button>;
};

export default Button;