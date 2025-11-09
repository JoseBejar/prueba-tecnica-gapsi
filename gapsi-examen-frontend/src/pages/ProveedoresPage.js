import React from 'react';
import ProveedorForm from '../components/ProveedorForm';
import ProveedorList from '../components/ProveedorList';
import { useProveedores } from '../hooks/useProveedores';
import './ProveedoresPage.css';

function ProveedoresPage() {
  const {
    proveedores,
    cargando,
    error,
    tieneMas,
    cargarMas,
    agregarProveedor,
    eliminarProveedor,
  } = useProveedores(5); // pageSize = 5

  const handleImprimirClick = () => {
    window.print(); // algo simple para el botón "Imprimir elemento"
  };

  return (
    <div className="proveedores-container">
      <h2 className="proveedores-title">Lista de proveedores</h2>

      <div className="admin-card">
        <div className="admin-card-header">
          <div className="admin-title-left">
            <img
              src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
              alt="Administración"
              className="admin-icon"
            />
            <span className="admin-title-text">Administración de proveedores</span>
          </div>

          <div className="admin-actions-right">
            <div className="legend-item legend-blue">
              <span className="legend-circle legend-circle-blue"></span>
              <span>Agregar elemento</span>
            </div>

            <button
              type="button"
              className="legend-item legend-red"
              onClick={handleImprimirClick}
            >
              <span className="legend-circle legend-circle-red"></span>
              <span>Imprimir elemento</span>
            </button>
          </div>
        </div>

        <div className="admin-card-body">
          <ProveedorForm onCreate={agregarProveedor} />

          {error && <p className="proveedores-error">{error}</p>}
          {cargando && <p className="proveedores-loading">Cargando...</p>}

          <ProveedorList
            proveedores={proveedores}
            cargando={cargando}
            tieneMas={tieneMas}
            onLoadMore={cargarMas}
            onDelete={eliminarProveedor}
          />
        </div>
      </div>
    </div>
  );
}

export default ProveedoresPage;
