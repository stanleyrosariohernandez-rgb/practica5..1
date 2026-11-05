
import { test, expect } from '@playwright/test';

// PRUEBA 1: Cargar la página principal.
test('La página principal carga correctamente', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('body')).toBeVisible();
});

// PRUEBA 2: Mostrar las cuatro recetas.
test('Se muestran las cuatro recetas principales', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByText('Dulce de leche')).toBeVisible();
  await expect(page.getByText('Chacá')).toBeVisible();
  await expect(page.getByText('Moro')).toBeVisible();
  await expect(page.getByText('Pastelón')).toBeVisible();
});

// PRUEBA 3: Mostrar el menú de navegación.
test('El menú de navegación está visible', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('nav')).toBeVisible();
});

// PRUEBA 4: Navegar entre las secciones.
test('Los enlaces del menú funcionan', async ({ page }) => {
  await page.goto('/');

  // Navegar a Recetas.
  await page.locator('nav').getByRole('link', {
    name: 'Recetas'
  }).click();

  await expect(page).toHaveURL(/#recetas$/);

  // Navegar a Nuestra historia.
  await page.locator('nav').getByRole('link', {
    name: 'Nuestra historia'
  }).click();

  await expect(page).toHaveURL(/#historia$/);

  // Regresar al Inicio.
  await page.locator('nav').getByRole('link', {
    name: 'Inicio'
  }).click();

  await expect(page).toHaveURL(/#inicio$/);
});

// PRUEBA 5: Abrir los detalles de una receta.
test('El botón Ver receta abre los detalles', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', {
    name: 'Ver receta'
  }).first().click();

  await expect(
    page.getByRole('button', { name: 'Cerrar receta' })
  ).toBeVisible();
});

// PRUEBA 6: Cerrar los detalles de una receta.
test('El botón Cerrar receta funciona', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', {
    name: 'Ver receta'
  }).first().click();

  const botonCerrar = page.getByRole('button', {
    name: 'Cerrar receta'
  });

  await expect(botonCerrar).toBeVisible();

  await botonCerrar.click();

  await expect(botonCerrar).toBeHidden();
});
