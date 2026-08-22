# 🎮 Ejercicio Videogames

**Objetivo:** Practicar comandos de Git, formato Markdown, y explorar y editar una app Vite + TypeScript.


## ⚙️ Setup inicial

1. Clonar el repositorio y moverse al directorio:
   ```bash
   git clone <url/git-videogames-USERNAME>
   cd git-videogames-USERNAME
   ```
2. Instalar dependencias con `npm install`
3. Levantar la app con `npm run dev`. Abrí el link que aparece en la terminal (`http://localhost:5173`) y verificá que la app cargue.

## 📝 Parte A — Git y Markdown

### 1. Ficha de videojuego

1. Crear el directorio `docs/puzzle/`. Puedes usar el comando `mkdir docs/puzzle`
2. Crear el archivo `docs/puzzle/tetris.md` y agregar una tabla con la información del juego Tetris, similar a los cuadros de Street Fighter II y Zelda Ocarina. El año de publicación del juego fue 1984 y el desarrollador Alexey Pajitnov.

### 2. Links y listas

3. El archivo `docs/videogames.md` ya tiene una sección `## Puzzle` con Tetris como ítem de texto. Completar la sección siguiendo el patrón de los otros géneros:
   - Agregar un párrafo de descripción del género Puzzle.
   - Agregar un link a la fuente en Wikipedia.
   - Convertir el ítem `Tetris` en un link interno a la ficha recién creada: `[Tetris](./puzzle/tetris.md)`.

### Commit y push

Hacer commit en main con el mensaje "Add puzzle genre docs" y push de los cambios.

## 🖥️ Parte B — Desafío de desarrollo

La app muestra un catálogo de videojuegos con botones para filtrar por género. Explorá el código fuente antes de continuar.

### TODO 1: Filtro por género (`src/domain/GamesList.ts`)

El método `filterByGenre` recibe un género como parámetro y debe retornar solo los juegos que coinciden. Si el género es `'All'`, debe retornar todos los juegos.

Hacer commit en main con el mensaje "Add filterByGenre functionality" y push de los cambios.

### TODO 2: Contador de juegos (`src/main.ts`)

La función `updateCounter` recibe un número y debe mostrarlo en el elemento `#count` del HTML. El contador se actualiza cada vez que el usuario filtra por género.

Hacer commit en main con el mensaje "Add updateCounter functionality" y push de los cambios.

## Finalización

1. Ejecutar `git push origin main` para subir los cambios si no lo hiciste hasta ahora.
2. Tomar una captura de pantalla de la aplicación web filtrando por "Puzzle"
3. Crear un nuevo Issue en GitHub con el título `Aplicación Web` y adjuntar la captura en el cuerpo del issue.

## Referencias
- Markdown Cheat Sheet: https://www.markdownguide.org/cheat-sheet/
- TypeScript: https://www.w3schools.com/typescript/
- HTML: https://www.w3schools.com/html/
