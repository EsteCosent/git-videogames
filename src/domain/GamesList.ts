import { Game } from './Game'

export class GamesList {
  private games: Game[] = [
    new Game(
      'The Legend of Zelda: Ocarina of Time',
      1998,
      'Nintendo',
      'Adventure',
      '/adventure/zelda-ocarina.jpg',
    ),
    new Game('Street Fighter II', 1991, 'Capcom', 'Fighting', '/fighting/Street_Fighter_II_screenshot.png'),
    new Game('Super Mario Bros', 1985, 'Nintendo', 'Platformer', '/placeholder.svg'),
    new Game('DOOM', 1993, 'id Software', 'FPS', '/placeholder.svg'),
    new Game('Tetris', 1984, 'Alexey Pajitnov', 'Puzzle', '/placeholder.svg'),
    new Game('Minecraft', 2011, 'Mojang', 'Sandbox', '/placeholder.svg'),
  ]

  // TODO: retornar solo los juegos cuyo género coincide con el parámetro genre.
  // Si genre es 'All', retornar todos los juegos.
  // 1. Renombrá el parámetro _genre a genre (quitá el guión bajo).
  // 2. Usá el método .filter(x => condición) del array this.games para filtrar por genre.
  filterByGenre(_genre: string): Game[] {
    return this.games
  }

  count(): number {
    return this.games.length
  }
}
