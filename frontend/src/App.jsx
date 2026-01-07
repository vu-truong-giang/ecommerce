import React from 'react'
import supabase from './supabaseClient'

export default function App(){
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'not set'

  return (
    <div style={{padding:20}}>
      <h1>React + FastAPI + Supabase</h1>
      <p>Supabase URL: {supabaseUrl}</p>
    </div>
  )
}
