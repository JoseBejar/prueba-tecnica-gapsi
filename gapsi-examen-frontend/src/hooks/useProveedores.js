// Patrón de diseño: Custom Hook
// Encapsula la lógica de negocio de proveedores (carga, scroll, CRUD).

import { useEffect, useState, useCallback } from 'react';
import {
  fetchProveedores,
  createProveedor,
  deleteProveedor,
} from '../api/api';

export function useProveedores(pageSize = 10) {
  const [proveedores, setProveedores] = useState([]);
  const [paginaActual, setPaginaActual] = useState(0);
  const [totalPaginas, setTotalPaginas] = useState(0);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);
  const [tieneMas, setTieneMas] = useState(true);

  const cargarPagina = useCallback(
    async (pagina) => {
      setCargando(true);
      setError(null);
      try {
        const data = await fetchProveedores(pagina, pageSize);
        setProveedores((prev) =>
          pagina === 0 ? data.contenido : [...prev, ...data.contenido]
        );
        setPaginaActual(data.pagina);
        setTotalPaginas(data.totalPaginas);
        setTieneMas(data.pagina < data.totalPaginas - 1);
      } catch (e) {
        setError(e.message);
      } finally {
        setCargando(false);
      }
    },
    [pageSize]
  );

  useEffect(() => {
    cargarPagina(0);
  }, [cargarPagina]);

  const cargarMas = () => {
    if (cargando || !tieneMas) return;
    cargarPagina(paginaActual + 1);
  };

  const agregarProveedor = async (nuevo) => {
    setCargando(true);
    setError(null);
    try {
      const creado = await createProveedor(nuevo);
      // Lo agregamos al inicio de la lista
      setProveedores((prev) => [creado, ...prev]);
      return creado;
    } catch (e) {
      setError(e.message);
      throw e;
    } finally {
      setCargando(false);
    }
  };

  const eliminarProveedor = async (id) => {
    setCargando(true);
    setError(null);
    try {
      await deleteProveedor(id);
      setProveedores((prev) => prev.filter((p) => p.id !== id));
    } catch (e) {
      setError(e.message);
      throw e;
    } finally {
      setCargando(false);
    }
  };

  return {
    proveedores,
    cargando,
    error,
    tieneMas,
    cargarMas,
    agregarProveedor,
    eliminarProveedor,
  };
}
