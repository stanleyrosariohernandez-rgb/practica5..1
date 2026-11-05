
import { test, expect } from '@playwright/test';

const API = 'https://jsonplaceholder.typicode.com';

// PRUEBA API 1: Consultar una publicación.
test('API 1: Obtener una publicación correctamente', async ({ request }) => {

  const respuesta = await request.get(`${API}/posts/1`);

  // Comprobar código HTTP.
  expect(respuesta.status()).toBe(200);

  // Obtener los datos JSON.
  const datos = await respuesta.json();

  // Comprobar la información recibida.
  expect(datos.id).toBe(1);
  expect(datos.userId).toBe(1);
  expect(datos.title).toBeTruthy();
  expect(datos.body).toBeTruthy();

});

// PRUEBA API 2: Consultar un recurso inexistente.
test('API 2: Obtener respuesta 404 para un recurso inexistente', async ({ request }) => {

  const respuesta = await request.get(`${API}/posts/999999`);

  // Comprobar que el recurso no existe.
  expect(respuesta.status()).toBe(404);

});

// PRUEBA API 3: Consultar una lista de publicaciones.
test('API 3: Obtener una lista de publicaciones en JSON', async ({ request }) => {

  const respuesta = await request.get(`${API}/posts?userId=1`);

  // Comprobar código HTTP.
  expect(respuesta.status()).toBe(200);

  // Convertir respuesta a JSON.
  const datos = await respuesta.json();

  // Comprobar que recibimos una lista.
  expect(Array.isArray(datos)).toBe(true);

  // Comprobar que la lista contiene elementos.
  expect(datos.length).toBeGreaterThan(0);

  // Comprobar la estructura de los registros.
  expect(datos[0]).toHaveProperty('id');
  expect(datos[0]).toHaveProperty('userId');
  expect(datos[0]).toHaveProperty('title');
  expect(datos[0]).toHaveProperty('body');

});
