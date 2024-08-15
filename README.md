# Ejercicio Videogames

Objetivo: practicar el formato Markdown.

> Tip: usar como referencia la [guía de Markdown](https://www.markdownguide.org/cheat-sheet/)

## Setup inicial

- Clonar localmente el repositorio ejecutando en la terminal `git clone 'url/git-videogames-USERNAME'`.
- Moverse al repositorio ejecutando `cd /git-videogames-USERNAME`.

**Importante:** realizar ´commit´ luego de cada paso del ejercicio.

## Parte A Ficha de videojuego

1. Dentro del repositorio, en la terminal ejecutar `mkdir fps` para crear un nuevo directorio. Moverse al directorio ejecutando `cd /FPS`. 
2. Ejecutar `touch DOOM.md` para crear un nuevo archivo. Editar el archivo insertando una tabla Markdown que contiene la información del videojuego.
```
| Title | DOOM |
| Year | 1993 |
| Developer | dd Software |
```

## Parte B Links y listas

3. Editar el archivo `videogames.md` para agregar una nueva sección:
- Sección `## FPS` con nivel de encabezado 2.
- Texto descripción del género `A first-person shooter (FPS) is a video game centered on gun fighting and other weapon-based combat seen from a first-person perspective, with the player experiencing the action directly through the eyes of the main character.`.
- Link a la fuente ([Wikipedia](https://en.wikipedia.org/wiki/First-person_shooter)) `[Wikipedia](https://en.wikipedia.org/wiki/First-person_shooter)`.
4. Editar la sección agregando una lista de videojuegos del género:
- Lista sin ordenar con el ítem `- DOOM`.
- Link interno del repositorio del ítem de lista a la ficha del juego `- [DOOM](./FPS/DOOM.md)`

## Parte C Imágenes

5. Buscar una imagen que ilustre el juego DOOM y subir el archivo al repositorio en el directorio `FPS`.
6. Editar el archivo `DOOM.md` para insertar la imagen usando Markdown `![DOOM screenshot](doom-screenshot.jpg)`.

## Finalización 

7. Ejecutar `push origin main` para llevar los cambios al repositorio remoto GitHub.
8. Realizar una captura de pantalla que visualice el archivo `DOOM.md` en GitHub (web).
9. Crear un nuevo Issue en GitHub con el subject `Markdown preview` y subir la captura de pantalla realizada en el cuerpo del issue.
