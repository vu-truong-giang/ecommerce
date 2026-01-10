import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage({ children }){
    return (
        <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f7fa'}}>
            <div style={{width: 420, padding: 24, background: '#fff', borderRadius: 8, boxShadow: '0 6px 18px rgba(0,0,0,0.08)'}}>
                <header style={{marginBottom: 16}}>
                    <nav style={{marginTop: 8}}>
                        <Link to="/login" style={{marginRight: 8}}>Login</Link>
                        <Link to="/register">Register</Link>
                    </nav>
                </header>

                <main>
                    {children || (
                        <div>
                            <p>Please provide login form as children to this layout.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    )
}