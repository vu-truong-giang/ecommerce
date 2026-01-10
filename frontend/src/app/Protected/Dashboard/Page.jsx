import React from "react";
import LogoutBtn from "../../components/ui/LogoutBtn.jsx";

export default function DashboardPage(){
    return (
        <div>
            <h2>Dashboard</h2>
            <p>Welcome to the protected dashboard page!</p>
            <LogoutBtn />
        </div>
    )
}