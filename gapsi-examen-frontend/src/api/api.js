// Patrón de diseño: Service / API layer
// Centraliza todas las llamadas HTTP al backend.

const BASE_URL = 'http://localhost:8080/api';

async function handleResponse(response) {
  if (!response.ok) {
    let errorMessage = 'Error en la petición';
    try {
      const data = await response.json();
      if (data && data.mensaje) {
        errorMessage = data.mensaje;
      }
    } catch (e) {
    }
    throw new Error(errorMessage);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

export async function fetchInfo() {
  const response = await fetch(`${BASE_URL}/info`);
  return handleResponse(response);
}

export async function fetchProveedores(page = 0, size = 10) {
  const response = await fetch(
    `${BASE_URL}/proveedores?page=${page}&size=${size}`
  );
  return handleResponse(response);
}

export async function createProveedor(payload) {
  const response = await fetch(`${BASE_URL}/proveedores`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return handleResponse(response);
}

export async function deleteProveedor(id) {
  const response = await fetch(`${BASE_URL}/proveedores/${id}`, {
    method: 'DELETE',
  });
  return handleResponse(response);
}
