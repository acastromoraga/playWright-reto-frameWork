# playWright-reto-frameWork
# 📘 Configuración de Proyecto de Automatización con Playwright

Este documento describe paso a paso cómo crear, clonar y configurar un proyecto de automatización utilizando **GitHub**, **Git** y **Playwright**.

El objetivo es dejar el proyecto correctamente configurado en el equipo local y listo para comenzar a desarrollar pruebas automatizadas.

---

# 1. Crear el repositorio en GitHub

Primero debemos crear el repositorio que contendrá nuestro proyecto de automatización.

### Pasos

1. Ingresar a GitHub.
2. Seleccionar **New repository**.
3. Ingresar el nombre del proyecto.

Ejemplo:

```text
automatizacion-playwright
```

4. Agregar una descripción si corresponde.
5. Definir si el repositorio será:

   * Public
   * Private
6. Crear el repositorio seleccionando:

```text
Create repository
```

Una vez creado, GitHub entregará la URL del repositorio.

Ejemplo:

```text
https://github.com/usuario/automatizacion-playwright.git
```

Esta URL será utilizada posteriormente para clonar el proyecto.

---

# 2. Crear carpeta local para los proyectos

Ahora debemos crear una carpeta en nuestro computador donde almacenaremos nuestros proyectos de automatización.

Por ejemplo:

```text
C:\Proyectos
```

Dentro de esta carpeta podremos mantener todos nuestros proyectos.

Ejemplo:

```text
C:\Proyectos
    ├── automatizacion-playwright
    ├── proyecto-api
    └── proyecto-e2e
```

---

# 3. Abrir la consola

Podemos utilizar:

* Git Bash
* PowerShell
* CMD
* Terminal de Visual Studio Code

Nos posicionamos en nuestra carpeta de proyectos.

Ejemplo:

```bash
cd C:/Proyectos
```

Podemos comprobar nuestra ubicación utilizando:

```bash
pwd
```

---

# 4. Clonar el repositorio desde GitHub

Desde la carpeta donde almacenaremos nuestros proyectos ejecutamos:

```bash
git clone https://github.com/usuario/automatizacion-playwright.git
```

Git descargará el repositorio y creará automáticamente una carpeta con el nombre del proyecto.

Ejemplo:

```text
C:\Proyectos\automatizacion-playwright
```

---

# 5. Ingresar al proyecto clonado

Después de realizar el `git clone`, debemos ingresar a la carpeta del proyecto.

```bash
cd automatizacion-playwright
```

Podemos validar nuestra ubicación con:

```bash
pwd
```

También podemos visualizar los archivos existentes:

```bash
ls
```

---

# 6. Abrir el proyecto en Visual Studio Code

Si tenemos Visual Studio Code instalado podemos ejecutar:

```bash
code .
```

El punto `.` significa:

> Abrir en Visual Studio Code la carpeta donde estoy actualmente.

---

# 7. Verificar Node.js

Playwright funciona sobre Node.js.

Antes de instalar Playwright debemos comprobar que Node.js esté instalado.

```bash
node --version
```

También podemos comprobar NPM:

```bash
npm --version
```

Deberíamos obtener versiones similares a:

```text
v22.x.x
10.x.x
```

Si los comandos no son reconocidos, debemos instalar Node.js antes de continuar.

---

# 8. Inicializar el proyecto Node.js

Si nuestro repositorio todavía no posee un archivo `package.json`, ejecutamos:

```bash
npm init -y
```

Esto creará:

```text
package.json
```

Este archivo contiene información importante del proyecto y sus dependencias.

---

# 9. Instalar Playwright

Para instalar Playwright ejecutamos:

```bash
npm init playwright@latest
```

Durante la instalación aparecerán algunas preguntas.

Configuración recomendada:

```text
Do you want to use TypeScript or JavaScript?
→ TypeScript

Where to put your end-to-end tests?
→ tests

Add a GitHub Actions workflow?
→ No

Install Playwright browsers?
→ Yes
```

Al finalizar tendremos Playwright configurado.

---

# 10. Instalar los navegadores de Playwright

Si necesitamos instalar nuevamente los navegadores podemos ejecutar:

```bash
npx playwright install
```

Playwright instalará los navegadores necesarios, como:

* Chromium
* Firefox
* WebKit

---

# 11. Estructura inicial del proyecto

Después de instalar Playwright tendremos una estructura similar a:

```text
automatizacion-playwright/
│
├── tests/
│   └── example.spec.ts
│
├── node_modules/
│
├── playwright.config.ts
├── package.json
├── package-lock.json
└── README.md
```

---

# 12. Ejecutar las pruebas

Para ejecutar todas las pruebas:

```bash
npx playwright test
```

---

# 13. Ejecutar pruebas mostrando el navegador

Por defecto Playwright ejecuta las pruebas sin mostrar el navegador.

Para visualizar la ejecución:

```bash
npx playwright test --headed
```

---

# 14. Ejecutar Playwright en modo UI

Uno de los comandos más útiles durante el desarrollo es:

```bash
npx playwright test --ui
```

Esto abrirá la interfaz gráfica de Playwright donde podemos:

* Ejecutar pruebas.
* Revisar pasos.
* Analizar errores.
* Revisar tiempos.
* Volver a ejecutar pruebas.

---

# 15. Ejecutar una prueba específica

Podemos ejecutar solamente un archivo:

```bash
npx playwright test tests/login.spec.ts
```

También podemos ejecutar una prueba por su nombre:

```bash
npx playwright test -g "Login correcto"
```

---

# 16. Ejecutar solamente en Chromium

```bash
npx playwright test --project=chromium
```

También podemos utilizar:

```bash
npx playwright test --project=firefox
```

o:

```bash
npx playwright test --project=webkit
```

---

# 17. Ejecutar pruebas en modo Debug

Para depurar una prueba:

```bash
npx playwright test --debug
```

Esto permite ejecutar la automatización paso a paso.

---

# 18. Generar código con Codegen

Playwright posee una herramienta que permite grabar nuestras acciones en el navegador.

Ejecutamos:

```bash
npx playwright codegen
```

También podemos indicar directamente una página:

```bash
npx playwright codegen https://www.ejemplo.cl
```

Mientras navegamos, Playwright irá generando automáticamente código.

Esta herramienta es especialmente útil para obtener:

* Locators
* Clicks
* Fill
* Selectores
* Acciones básicas

---

# 19. Visualizar el reporte HTML

Después de ejecutar las pruebas podemos abrir el reporte con:

```bash
npx playwright show-report
```

El reporte permite revisar:

* Pruebas exitosas.
* Pruebas fallidas.
* Duración.
* Errores.
* Evidencias.
* Información de ejecución.

---

# 20. Comandos recomendados

| Acción                      | Comando                                   |
| --------------------------- | ----------------------------------------- |
| Ejecutar todas las pruebas  | `npx playwright test`                     |
| Mostrar navegador           | `npx playwright test --headed`            |
| Abrir Playwright UI         | `npx playwright test --ui`                |
| Ejecutar Debug              | `npx playwright test --debug`             |
| Ejecutar Chromium           | `npx playwright test --project=chromium`  |
| Ejecutar archivo específico | `npx playwright test tests/login.spec.ts` |
| Buscar prueba por nombre    | `npx playwright test -g "nombre"`         |
| Abrir reporte               | `npx playwright show-report`              |
| Instalar navegadores        | `npx playwright install`                  |
| Generar código              | `npx playwright codegen`                  |

---

# 21. Comandos básicos de Git

Antes de comenzar a trabajar es recomendable actualizar nuestro proyecto:

```bash
git pull
```

Para revisar archivos modificados:

```bash
git status
```

Para agregar los cambios:

```bash
git add .
```

Crear un commit:

```bash
git commit -m "Se agregan pruebas automatizadas"
```

Enviar los cambios a GitHub:

```bash
git push
```

---

# 22. Flujo recomendado de trabajo

Antes de comenzar a desarrollar:

```bash
git pull
```

Realizamos nuestros cambios y ejecutamos las pruebas:

```bash
npx playwright test
```

Revisamos los cambios:

```bash
git status
```

Agregamos los archivos:

```bash
git add .
```

Creamos el commit:

```bash
git commit -m "Se agregan nuevos casos automatizados"
```

Finalmente enviamos los cambios:

```bash
git push
```

---

# 23. Flujo completo resumido

Para un proyecto nuevo, el flujo general será:

```bash
cd C:/Proyectos
```

Clonar:

```bash
git clone https://github.com/usuario/automatizacion-playwright.git
```

Ingresar:

```bash
cd automatizacion-playwright
```

Abrir Visual Studio Code:

```bash
code .
```

Inicializar Node.js si corresponde:

```bash
npm init -y
```

Instalar Playwright:

```bash
npm init playwright@latest
```

Instalar navegadores:

```bash
npx playwright install
```

Ejecutar:

```bash
npx playwright test
```

Ejecutar visualmente:

```bash
npx playwright test --headed
```

Abrir Playwright UI:

```bash
npx playwright test --ui
```

---

# 📌 Consideraciones importantes

Antes de comenzar a trabajar siempre es recomendable ejecutar:

```bash
git pull
```

Antes de subir cambios:

```bash
git status
```

Y luego:

```bash
git add .
git commit -m "Descripción del cambio"
git push
```

De esta forma mantenemos nuestro proyecto local sincronizado con el repositorio de GitHub.
