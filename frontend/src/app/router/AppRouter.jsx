import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../auth/LoginPage";
import Login from "../auth/Login/login";
import Register from "../auth/Register/register";
import DashboardPage from "../Protected/seller/Dashboard/Page";
import HomePage from "../Protected/user/Home/Page";
import ProfilePage from "../Protected/user/Profile/Page";
import  UserLayout from "../Protected/user/Layout";
import AuthRoute from "./AuthRouter";
import ProtectedRouter from "./ProtectedRouter";

export default function AppRouter(){
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Navigate to="/login" replace />} />

                {/* Auth Routes */}
                <Route path="/login" element={
                    <AuthRoute>
                        <LoginPage><Login /></LoginPage>
                    </AuthRoute>} />
                <Route path="/register" element={
                    <AuthRoute>
                        <LoginPage><Register /></LoginPage>
                    </AuthRoute>} />

                {/* Protected Routes */}
                {/* Other routers (kept as placeholders) */}
                

                <Route element ={
                    <ProtectedRouter>
                        <UserLayout />
                    </ProtectedRouter>
                }>
                    <Route path="/Home" element={<HomePage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Route>
                
                {/* {UserRouter} */}
                {/* {SellerRouter} */}

                <Route path="*" element={<h2>404 - Page Not Found</h2>} />
            </Routes>
        </BrowserRouter>
    )
}