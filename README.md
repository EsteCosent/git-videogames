# 🎮 Ejercicio Videogames

**Objetivo:** Practicar comandos de Git, formato Markdown y explorar una app Vite + TypeScript.

> 💡 Referencia útil: [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)

---

## ⚙️ Setup inicial

1. Clonar el repositorio y moverse al directorio:
   ```bash
   git clone <url/git-videogames-USERNAME>
   cd git-videogames-USERNAME
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Levantar la app:
   ```bash
   npm run dev
   ```
   Abrí el link que aparece en la terminal (`http://localhost:5173`) y verificá que la app cargue.

> ⚠️ Realizá un `commit` al finalizar cada parte del ejercicio.

---

## 📝 Parte A — Git y Markdown

El directorio `docs/` contiene las fichas de los juegos en formato Markdown. Explorá los archivos existentes (`docs/adventure/zelda-ocarina.md`, `docs/fighting/street-fighter-ii.md`) para ver cómo están armadas antes de continuar.

### A1. Ficha de videojuego

1. Crear el directorio `docs/puzzle/`:
   ```bash
   mkdir docs/puzzle
   ```
2. Crear el archivo `docs/puzzle/tetris.md` y agregar una tabla con la información del juego:
   ```markdown
   | *Tetris*        |                  |
   | --------------- | ---------------- |
   | **Year**        | 1984             |
   | **Developer**   | Alexey Pajitnov  |
   ```

### A2. Links y listas

3. El archivo `docs/videogames.md` ya tiene una sección `## Puzzle` con Tetris como ítem de texto. Completar la sección siguiendo el patrón de los otros géneros:
   - Agregar un párrafo de descripción del género Puzzle.
   - Agregar un link a la fuente en Wikipedia.
   - Convertir el ítem `Tetris` en un link interno a la ficha recién creada: `[Tetris](./puzzle/tetris.md)`.

### A3. Imágenes y emoji

4. Buscar una imagen de Tetris y agregarla al directorio `docs/puzzle/`.
5. Insertar la imagen en `docs/puzzle/tetris.md`:
   ```markdown
   ![Tetris screenshot](tetris-screenshot.jpg)
   ```
6. Agregar un emoji al título de `docs/videogames.md`:
   ```markdown
   # Videogames Hall of Fame 🎮
   ```

### Commit y push

Hacer commit en main con el mensaje "Add puzzle genre docs" y push de los cambios.

---

## 🖥️ Parte B — Desafío de desarrollo

La app muestra un catálogo de videojuegos con botones para filtrar por género.

Explorá el código fuente antes de continuar:
- `src/domain/Game.ts` — clase que representa un videojuego
- `src/domain/GamesList.ts` — clase que maneja la colección de juegos
- `src/main.ts` — renderiza las cards y conecta la UI

Buscá en el código las líneas marcadas con `// TODO` y leé los comentarios para entender qué se espera implementar.

Podés correr los tests para ver qué está pendiente:
```bash
npm run test
```

Completá los dos `TODO` que están en el código fuente.

### TODO 1 — Filtro por género (`src/domain/GamesList.ts`)

El método `filterByGenre` recibe un género como parámetro y debe retornar solo los juegos que coinciden. Si el género es `'All'`, debe retornar todos los juegos.

Hacer commit en main con el mensaje "Add filterByGenre functionality" y push de los cambios.

### TODO 2 — Contador de juegos (`src/main.ts`)

La función `updateCounter` recibe una instancia de `GamesList` y debe mostrar el número de juegos registrados en el elemento `#count` del HTML.

Hacer commit en main con el mensaje "Add updateCounter functionality" y push de los cambios.

### Verificación

Una vez completados los TODOs:

```bash
npm run test
```

Todos los tests deberían pasar. Además, en la app los botones de filtro deberían funcionar y el contador actualizarse al filtrar.

---

## ✅ Finalización

1. Ejecutar `git push origin main` para subir los cambios si no lo hiciste hasta ahora.
2. Tomar una captura de pantalla donde se vea el archivo `docs/puzzle/tetris.md` en GitHub (web).
3. Crear un nuevo Issue en GitHub con el título `Markdown preview` y adjuntar la captura en el cuerpo del issue.
4. Tomar una captura de pantalla de la aplicación web filtrando por "Puzzle"
5. Crear un nuevo Issue en GitHub con el título `Aplicación Web` y adjuntar la captura en el cuerpo del issue.
