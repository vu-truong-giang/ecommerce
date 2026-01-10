import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth.jsx";
import { signOut } from "../../service/auth.services.jsx";


export default function LogoutBtn() {
    const navigate = useNavigate();
    const { user, loading } = useAuth();

    const handleLogout = async () => {
        await signOut();
        navigate("/login");
    };

    if (loading) return <p>Loading...</p>;

    return (
        <button onClick={handleLogout}>Logout</button>
    )
}