import { describe, it, expect } from 'vitest'
import { GamesList } from '../../domain/GamesList'

describe('GamesList', () => {
  describe('count', () => {
    it('returns the total number of games', () => {
      const list = new GamesList()
      expect(list.count()).toBe(6)
    })
  })

  describe('filterByGenre', () => {
    it('returns all games when genre is "All"', () => {
      const list = new GamesList()
      expect(list.filterByGenre('All')).toHaveLength(6)
    })

    it('returns only games matching the given genre', () => {
      const list = new GamesList()
      const result = list.filterByGenre('Adventure')
      expect(result).toHaveLength(1)
      expect(result[0].genre).toBe('Adventure')
    })

    it('returns an empty array when no games match the genre', () => {
      const list = new GamesList()
      expect(list.filterByGenre('Racing')).toHaveLength(0)
    })
  })
})
