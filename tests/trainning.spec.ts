//importar la libreria de playwright
import { test, expect } from '@playwright/test';

//page = fixture de playwright que nos permite interactuar con la pagina web
//await = palabra reservada de javascript que nos permite esperar a que una promesa se resuelva


test('Pruebas de entrenamiento source demo', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.locator('.login_logo').isVisible();
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    page.pause();

});
