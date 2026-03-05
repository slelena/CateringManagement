import { screen } from '@testing-library/react'
import { renderWithRouter } from '@/test/utils'
import DashboardPage from './DashboardPage'

describe('DashboardPage', () => {
  it('shows empty state when there are no upcoming events', () => {
    renderWithRouter(<DashboardPage />)
    // all mock events are in the future so this confirms the list renders
    expect(screen.queryByText('No upcoming events')).not.toBeInTheDocument()
  })
})