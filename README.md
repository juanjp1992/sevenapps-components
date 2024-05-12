# Seven Apps Components
Librería de componentes creada para los proyectos de `SevenAppsStudio`.

## Pasos para añadir un nuevo componente
1. Cambiamos la versión de `package.json` para que detecte los cambios.

2. Creamos un nuevo componente en `src/components/NuevoComponente.tsx`.

3. Después lo enlazamos en el archivo `src/index.ts`
```js
import HolaMundo from "./components/HolaMundo";
import NuevoComponente from "./components/NuevoComponente.tsx"

export { HolaMundo, NuevoComponente };
```

4. Utilizamos el comando `npm run bundle` y esperamos que termine.
5. Después utilizamos el comando `npm publish --access=public` y ya lo tendremos listo.
