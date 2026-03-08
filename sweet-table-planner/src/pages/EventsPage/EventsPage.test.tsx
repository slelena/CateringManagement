import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithRouter } from '@/test/utils'
import EventsPage from './EventsPage'

describe('EventsPage', () => {
  it('opens the modal when clicking New Event', async () => {
    renderWithRouter(<EventsPage />, { language: 'en' })
    await userEvent.click(screen.getByRole('button', { name: /new event/i }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('closes the modal when clicking Cancel', async () => {
    renderWithRouter(<EventsPage />, { language: 'en' })
    await userEvent.click(screen.getByRole('button', { name: /new event/i }))
    await userEvent.click(screen.getByRole('button', { name: /cancel/i }))
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument())
  })

  it('pre-fills the form when editing an event', async () => {
    renderWithRouter(<EventsPage />)
    const editButtons = screen.getAllByRole('button', { name: /edit/i })
    await userEvent.click(editButtons[0])
    expect(screen.getByDisplayValue("Sofia's Birthday")).toBeInTheDocument()
  })

  it('deletes an event when confirming delete', async () => {
    vi.spyOn(window, 'confirm').mockReturnValue(true)
    renderWithRouter(<EventsPage />)
    const deleteButtons = screen.getAllByRole('button', { name: /delete/i })
    await userEvent.click(deleteButtons[0])
    await waitFor(() => expect(screen.queryByText("Sofia's Birthday")).not.toBeInTheDocument())
    vi.restoreAllMocks()
  })

  it('renders the page title in Serbian', () => {
    renderWithRouter(<EventsPage />, { language: 'sr' })
    expect(screen.getByText('Događaji')).toBeInTheDocument()
  })

  it('renders the page title in English', () => {
    renderWithRouter(<EventsPage />, { language: 'en' })
    expect(screen.getByText('Events')).toBeInTheDocument()
  })

  it('shows Serbian validation errors', async () => {
    renderWithRouter(<EventsPage />, { language: 'sr' })
    await userEvent.click(screen.getByRole('button', { name: /novi događaj/i }))
    await userEvent.click(screen.getByRole('button', { name: /dodaj događaj/i }))
    await waitFor(() =>
      expect(screen.getAllByText('This field is required').length).toBeGreaterThan(0)
    )
  })
})
