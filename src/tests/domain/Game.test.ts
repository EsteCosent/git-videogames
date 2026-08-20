import { describe, it, expect } from 'vitest'
import { Game } from '../../domain/Game'

describe('Game', () => {
  it('stores all properties', () => {
    const game = new Game('DOOM', 1993, 'id Software', 'FPS', '/fps/doom.jpg')

    expect(game.title).toBe('DOOM')
    expect(game.year).toBe(1993)
    expect(game.developer).toBe('id Software')
    expect(game.genre).toBe('FPS')
    expect(game.cover).toBe('/fps/doom.jpg')
  })
})
