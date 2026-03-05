import { screen } from '@testing-library/react'
import { renderWithRouter } from '@/test/utils'
import App from './App'

describe('App navigation', () => {
  it('renders the header', () => {
    renderWithRouter(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    renderWithRouter(<App />)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /events/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /builder/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /shopping/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /recipes/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /settings/i })).toBeInTheDocument()
  })
})
