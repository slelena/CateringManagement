import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithRouter } from '@/test/utils'
import App from './App'

it('navigates to events page when clicking Events nav link', async () => {
  renderWithRouter(<App />)
  await userEvent.click(screen.getByRole('link', { name: /📅 events/i }))
  expect(screen.getByText('Events — coming soon')).toBeInTheDocument()
})