import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function NavigateBtn({ to, children , className = ""}) {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(to);
    };
    return (
        <button onClick={handleNavigate} className={`bg-blue-500 text-white  hover:bg-blue-600 transition ${className}`}>
            {children}
        </button>
    )
}