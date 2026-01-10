import React, { useState } from "react";
import { Navigate, replace, useNavigate } from "react-router-dom";
import { signIn } from "../../service/auth.services";

export default function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await signIn(email, password);
        if (res?.error) {
            console.error("Login failed:", res.error.message || res.error);
        } else {
            console.log("Login successful", res?.data || res);
            navigate("/dashboard", {replace: true});
        }
    }
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>Email:</label>
                <input type="email" name="email" required onChange={e => setEmail(e.target.value)} />
                <br />
                <label>Password:</label>
                <input type="password" name="password" required onChange={e => setPassword(e.target.value)} />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}