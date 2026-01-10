import React, { useState } from "react";
import { Navigate, replace, useNavigate } from "react-router-dom";
import { signUp } from "../../service/auth.services";

export default function Register(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        const res = await signUp(email, password);
        if (res?.error) {
            console.error("Registration failed:", res.error.message || res.error);
        } else {
            console.log("Registration successful", res?.data || res);
            navigate("/login", replace=true);
        }
    }
    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <label>Email:</label>
                <input type="email" name="email" required onChange={e => setEmail(e.target.value)} />
                <br />
                <label>Password:</label>
                <input type="password" name="password" required onChange={e => setPassword(e.target.value)} />
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}