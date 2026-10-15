# 📋 Gestor de requisitos

## Ejercicio — Accesibilidad, Bootstrap y TypeScript

**Objetivo:** evaluar la accesibilidad de una página con WAVE, darle estilo con Bootstrap y completar una pequeña funcionalidad en TypeScript.

La aplicación permite registrar **requisitos funcionales y no funcionales** de un proyecto, listarlos en una tabla y ver cuántos hay de cada tipo.

### Requisitos previos

Antes de comenzar, es necesario:

- Tener instalado **Google Chrome**.
- Instalar la extensión [**WAVE** en Google Chrome](https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh).

---

### 1. Iniciar el proyecto

Antes de comenzar con el ejercicio, preparar una copia propia del repositorio y ejecutar el proyecto de forma local.

1. Realizar un **fork** del repositorio. A partir de este punto, todos los cambios se realizarán sobre la copia creada.

2. Copiar la URL del fork y clonar el repositorio en la computadora, reemplazando `URL_DEL_FORK` por esa dirección:

```
git clone URL_DEL_FORK
```

3. Abrir la carpeta del proyecto en **Visual Studio Code**.

4. Abrir una terminal dentro de Visual Studio Code y ejecutar:

```
npm install
```

5. Una vez finalizada la instalación, ejecutar:

```
npm run dev
```

6. Abrir en **Google Chrome** la dirección local que aparece en la terminal.

---

## Parte A — Accesibilidad con WAVE

### 2. Evaluar y corregir la accesibilidad 🔎

En esta parte se utilizará **WAVE** para identificar problemas de accesibilidad presentes en la página y realizar las correcciones necesarias.

1. Ejecutar **WAVE** sobre la página local abierta en Google Chrome.

2. Revisar los resultados y corregir los errores y errores de contraste. Analizar las alertas y resolver aquellas que indiquen un problema de accesibilidad.

Para realizar las modificaciones será necesario trabajar sobre los archivos `index.html` y `src/interface/style.css`.

Una vez realizadas las correcciones, ejecutar **WAVE nuevamente** sobre la página.

👀 **Resultado esperado:** los problemas identificados quedan resueltos y la página mantiene su funcionamiento.

Hacer commit en main con el mensaje "Fix accessibility issues" y push de los cambios.

---

## Parte B — Bootstrap

### 3. Dar estilo al formulario

1. Agregar la clase `form-label` a cada `<label>` correspondiente a los siguientes campos:

   - **Título del requisito**
   - **Descripción**

   Estos `<label>` fueron incorporados durante la parte de accesibilidad.

2. Agregar la clase `form-control` a cada uno de los input de los siguientes campos:

   - **Título del requisito**
   - **Descripción**

3. Agregar las clases `btn-solid` y `theme-primary` al botón **Agregar requisito**.

👀 **Resultado esperado:** los campos y el botón tienen un estilo coherente y cada campo puede identificarse sin depender del texto del `placeholder`.

📚 **Referencias:** [controles de formulario](https://getbootstrap.com/docs/6.0/forms/form-control/) y [botones](https://getbootstrap.com/docs/6.0/components/button/).

---

### 4. Dar estilo a los radio buttons y al switch

#### Radio buttons

1. Agregar la clase `radio` a los dos radio buttons de **Tipo de requisito**.
2. Agregar la clase `form-field` a cada div que envuelve un radio button.

📚 **Referencia:** [radios](https://getbootstrap.com/docs/6.0/forms/radio/)

#### Switch para requisito obligatorio

3. Agregar la clase `switch` al `<div>` interior que ya envuelve el checkbox de **¿Es un requisito obligatorio?**.

4. Comprobar el funcionamiento de ambos componentes:

   - En los radio buttons, solo debe ser posible seleccionar una de las dos opciones.
   - El switch debe poder activarse y desactivarse.

👀 **Resultado esperado:** las opciones **Funcional** y **No funcional** se muestran como radio buttons de Bootstrap y la opción de obligatoriedad se muestra como un switch. El formulario sigue registrando correctamente el tipo y la obligatoriedad elegidos.

📚 **Referencia:** [switches](https://getbootstrap.com/docs/6.0/forms/switch/).

Hacer commit en main con el mensaje "Add Bootstrap styles" y push de los cambios.

---

## Parte C — Desafío de desarrollo

La aplicación muestra una tabla con los requisitos registrados. Debajo del título **Requisitos registrados** hay un resumen con la cantidad de requisitos, que por ahora muestra `—` porque todavía no está implementado.

Explorá el código fuente antes de continuar: `src/domain/requirements.ts` define los datos y `src/interface/main.ts` conecta la página con esos datos.

### 5. Contadores de requisitos (`src/interface/main.ts`)

La función `updateCounters` recibe la lista de requisitos y debe actualizar el resumen de la página. El resumen se actualiza al cargar la página y cada vez que se agrega un requisito desde el formulario.

Completar la función para que:

1. Muestre el total de requisitos en el elemento `#count-total`.
2. Muestre la cantidad de requisitos funcionales en `#count-functional`.
3. Muestre la cantidad de requisitos no funcionales en `#count-non-functional`.
4. Muestre el aviso `#nfr-warning` **únicamente** cuando no haya ningún requisito no funcional. Si hay al menos uno, el aviso debe estar oculto.

Las referencias a los elementos del HTML ya están declaradas al comienzo de `main.ts`.

👀 **Resultado esperado:** al abrir la página el resumen indica 3 requisitos en total, 3 funcionales y 0 no funcionales, y se ve el aviso. Al agregar un requisito **No funcional** desde el formulario, los contadores se actualizan (4 / 3 / 1) y el aviso desaparece.

Hacer commit en main con el mensaje "Add updateCounters functionality" y push de los cambios.

---

## 6. Comprobar el resultado final

Para finalizar, realizar una última verificación de accesibilidad y funcionamiento.

1. Ejecutar **WAVE nuevamente** sobre la página, **en los dos estados del resumen**: con el aviso visible y con el aviso oculto.
2. Comprobar que los cambios realizados en las partes B y C no hayan introducido nuevos problemas de accesibilidad. Si aparece alguno, corregirlo.

👀 **Resultado esperado:** la página conserva su funcionamiento, los componentes tienen estilo de Bootstrap, los contadores funcionan y no quedan errores de accesibilidad.

## Finalización

1. Ejecutar `git push origin main` para subir los cambios si no lo hiciste hasta ahora.
2. Tomar una captura de pantalla del resultado final de **WAVE** (sin errores) con un requisito de cada tipo agregado.
3. Crear un nuevo Issue en GitHub con el título `Gestor de requisitos` y adjuntar la captura en el cuerpo del issue. Nota: es posible tener que habilitar la creación de issues de un repositorio creado a partir de un fork. Esto se logra desde Settings > General, buscar la sección Features y habilitar el checkbox de "Issues".

## Referencias

- WAVE: <https://wave.webaim.org/>
- Bootstrap 6: <https://getbootstrap.com/docs/6.0/>
- TypeScript: <https://www.w3schools.com/typescript/>
