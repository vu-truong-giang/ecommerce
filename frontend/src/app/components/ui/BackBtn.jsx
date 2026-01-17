import { useNavigate } from "react-router-dom";
import React from "react";
export default function BackBtn(){
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }
    return (
        <button onClick={handleBack} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Back
        </button>
    )
}