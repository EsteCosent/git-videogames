import { Game } from './domain/Game'
import { GamesList } from './domain/GamesList'

const gamesList = new GamesList()

// ─── Render ──────────────────────────────────────────────────────────────────

function gameCard(game: Game): string {
  return `
    <div class="col">
      <div class="card h-100 bg-secondary-subtle border-0 shadow-sm">
        <img
          src="${game.cover}"
          class="card-img-top object-fit-cover"
          style="height: 180px;"
          alt="${game.title}"
        />
        <div class="card-body">
          <span class="badge text-bg-primary mb-2">${game.genre}</span>
          <h5 class="card-title fs-6 fw-bold">${game.title}</h5>
          <p class="card-text text-secondary small mb-0">${game.developer}</p>
          <p class="card-text text-secondary small">${game.year}</p>
        </div>
      </div>
    </div>
  `
}

function renderCards(games: Game[]): void {
  const grid = document.querySelector<HTMLDivElement>('#grid')!
  grid.innerHTML = games.map(gameCard).join('')
}

// ─── Counter ─────────────────────────────────────────────────────────────────

function updateCounter(_filtered: GamesList): void {
  const el = document.querySelector<HTMLSpanElement>('#count')!
  // TODO: mostrar el número de juegos en el elemento #count.
  // 1. Renombrá el parámetro _filtered a filtered (quitá el guión bajo).
  // 2. Usá el método count() de filtered para obtener la cantidad.
  // 3. Asigná el valor a el.textContent como string.
  el.textContent = ''
}

// ─── Filters ─────────────────────────────────────────────────────────────────

function getGenres(): string[] {
  const all = gamesList.filterByGenre('All').map((g) => g.genre)
  return ['All', ...new Set(all)]
}

function renderFilters(activeGenre: string): void {
  const container = document.querySelector<HTMLDivElement>('#filters')!
  container.innerHTML = getGenres()
    .map((genre) => {
      const active = genre === activeGenre ? 'btn-light' : 'btn-outline-light'
      return `<button class="btn btn-sm ${active}" data-genre="${genre}">${genre}</button>`
    })
    .join('')

  container.querySelectorAll<HTMLButtonElement>('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const genre = btn.dataset.genre ?? 'All'
      const filtered = gamesList.filterByGenre(genre)
      renderCards(filtered)
      renderFilters(genre)
      updateCounter(gamesList)
    })
  })
}

// ─── Init ─────────────────────────────────────────────────────────────────────

renderCards(gamesList.filterByGenre('All'))
renderFilters('All')
updateCounter(gamesList)
