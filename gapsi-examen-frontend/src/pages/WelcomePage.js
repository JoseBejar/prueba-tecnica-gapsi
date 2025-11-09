import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchInfo } from '../api/api';
import './WelcomePage.css';

function WelcomePage() {
  const navigate = useNavigate();

  const [mensaje, setMensaje] = useState('');
  const [version, setVersion] = useState('');
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarInfo = async () => {
      try {
        const data = await fetchInfo();
        setMensaje(data.mensajeBienvenida);
        setVersion(data.version);
      } catch (e) {
        setError(e.message);
      } finally {
        setCargando(false);
      }
    };

    cargarInfo();
  }, []);

  const handleContinuar = () => {
    navigate('/proveedores');
  };

  return (
    <div className="welcome-page">
      <h2 className="welcome-title">Welcome page</h2>

      <div className="welcome-card">
        <div className="welcome-card-header">
          <span>e-Commerce Gapsi</span>
          <div className="welcome-menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="welcome-card-body">
          <img
            className="welcome-logo"
            src="https://www.gapsi.com.mx/wp-content/uploads/2020/07/logo-gapsi.png"
            alt="Gapsi logo"
          />

          {cargando && <p>Cargando información...</p>}
          {error && <p className="welcome-error">{error}</p>}

          {!cargando && !error && (
            <>
              <p className="welcome-message">{mensaje}</p>

              <button className="welcome-button" onClick={handleContinuar}>
                Continuar
              </button>
            </>
          )}
        </div>

        <div className="welcome-card-footer">
          <span className="welcome-version-label">
            versión {version || '0.0.0'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
