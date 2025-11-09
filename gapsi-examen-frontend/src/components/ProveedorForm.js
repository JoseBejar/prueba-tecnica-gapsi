import React, { useState } from 'react';
import './ProveedorForm.css';

function ProveedorForm({ onCreate }) {
  const [nombre, setNombre] = useState('');
  const [razonSocial, setRazonSocial] = useState('');
  const [direccion, setDireccion] = useState('');
  const [errorLocal, setErrorLocal] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorLocal(null);

    if (!nombre || !razonSocial || !direccion) {
      setErrorLocal('Todos los campos son obligatorios');
      return;
    }

    try {
      await onCreate({ nombre, razonSocial, direccion });
      setNombre('');
      setRazonSocial('');
      setDireccion('');
    } catch (e) {
      setErrorLocal(e.message);
    }
  };

  return (
    <form className="proveedor-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="form-row">
        <label>Razón Social</label>
        <input
          type="text"
          value={razonSocial}
          onChange={(e) => setRazonSocial(e.target.value)}
        />
      </div>

      <div className="form-row">
        <label>Dirección</label>
        <input
          type="text"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
      </div>

      {errorLocal && <p className="form-error">{errorLocal}</p>}

      <button type="submit" className="btn btn-primary">
        Agregar proveedor
      </button>
    </form>
  );
}

export default ProveedorForm;
