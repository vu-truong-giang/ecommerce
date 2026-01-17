import React from "react";
import { useAuth } from "../../hooks/useAuth.jsx";
/*import LoadingSpinner from "../components/ui/LoadingSpinner.jsx";*/
import {  Navigate } from "react-router-dom";
import DashboardPage from "./Dashboard/Page.jsx";
export default function Layout(){
    const { user, loading } = useAuth();

    if (loading) {
        return <p>loading</p>/*<LoadingSpinner />*/;
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <h3>Layout</h3>
            <DashboardPage />
        </div>
    );
}