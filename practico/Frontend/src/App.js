
import './App.css';
import React, { useState } from 'react';
import{ useEffect } from 'react';

function App() {
  const url ='http://localhost:4000/api/notas'
  const [Tareas, getnotas]=useState();
  const fetchApi = async () =>{
    const response = await fetch (url)
    console.log(response.status)
    const responseJSON=await response.json()
    getnotas(responseJSON)
    
  }
  useEffect (()=>{
    fetchApi()
  }, [])
  return (
    <div className="App">
      <div className='notas'>
        <h2>Lista Tareas pendientes</h2>
        { }
        
      </div>
    </div>
  );
}

export default App;
