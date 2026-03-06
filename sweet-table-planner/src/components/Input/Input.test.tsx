import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithRouter } from '@/test/utils'
import Input from './Input'

describe('Input', () => {
  it('renders with placeholder', () => {
    renderWithRouter(<Input placeholder="Enter name" />)
    expect(screen.getByPlaceholderText('Enter name')).toBeInTheDocument()
  })

  it('accepts user input', async () => {
    renderWithRouter(<Input placeholder="Enter name" />)
    const input = screen.getByPlaceholderText('Enter name')
    await userEvent.type(input, 'Sofia')
    expect(input).toHaveValue('Sofia')
  })

  it('is disabled when disabled prop is passed', () => {
    renderWithRouter(<Input placeholder="Enter name" disabled />)
    expect(screen.getByPlaceholderText('Enter name')).toBeDisabled()
  })
})
