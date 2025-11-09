import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import ProveedoresPage from './pages/ProveedoresPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/proveedores" element={<ProveedoresPage />} />
    </Routes>
  );
}

export default App;
