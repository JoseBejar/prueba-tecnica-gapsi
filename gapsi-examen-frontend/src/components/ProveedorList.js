import React, { useRef } from 'react';
import './ProveedorList.css';

function ProveedorList({ proveedores, onDelete, cargando, tieneMas, onLoadMore }) {
  const scrollRef = useRef(null);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el || cargando || !tieneMas) return;

    const { scrollTop, clientHeight, scrollHeight } = el;

    // cuando estamos cerca del final, pedimos más datos (virtual scroll)
    if (scrollTop + clientHeight >= scrollHeight - 50) {
      onLoadMore();
    }
  };

  return (
    <div className="tabla-card">
      <div
        className="tabla-scroll"
        ref={scrollRef}
        onScroll={handleScroll}
      >
        <table className="tabla-proveedores">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Razón Social</th>
              <th>Dirección</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {proveedores.length === 0 && !cargando && (
              <tr>
                <td colSpan="4" className="tabla-empty">
                  No hay proveedores
                </td>
              </tr>
            )}

            {proveedores.map((p) => (
              <tr key={p.id}>
                <td>{p.nombre}</td>
                <td>{p.razonSocial}</td>
                <td>{p.direccion}</td>
                <td>
                  <button
                    className="btn-accion-eliminar"
                    onClick={() => onDelete(p.id)}
                    title="Eliminar"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {cargando && <div className="tabla-loading">Cargando...</div>}
        {!cargando && tieneMas && proveedores.length > 0 && (
          <div className="tabla-more">Desplázate para cargar más...</div>
        )}
      </div>
    </div>
  );
}

export default ProveedorList;
