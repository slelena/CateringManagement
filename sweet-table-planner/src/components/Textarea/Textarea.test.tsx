import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithRouter } from '@/test/utils'
import Textarea from './Textarea'

describe('Textarea', () => {
  it('renders with placeholder', () => {
    renderWithRouter(<Textarea placeholder="Enter notes" />)
    expect(screen.getByPlaceholderText('Enter notes')).toBeInTheDocument()
  })

  it('accepts user input', async () => {
    renderWithRouter(<Textarea placeholder="Enter notes" />)
    const textarea = screen.getByPlaceholderText('Enter notes')
    await userEvent.type(textarea, 'Pink and gold theme')
    expect(textarea).toHaveValue('Pink and gold theme')
  })

  it('is disabled when disabled prop is passed', () => {
    renderWithRouter(<Textarea placeholder="Enter notes" disabled />)
    expect(screen.getByPlaceholderText('Enter notes')).toBeDisabled()
  })
})
