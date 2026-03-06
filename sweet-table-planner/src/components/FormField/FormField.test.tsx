import { screen } from '@testing-library/react'
import { renderWithRouter } from '@/test/utils'
import FormField from './FormField'
import Input from '../Input/Input'

describe('FormField', () => {
  it('renders the label', () => {
    renderWithRouter(
      <FormField label="Event Name">
        <Input placeholder="Enter name" />
      </FormField>
    )
    expect(screen.getByText('Event Name')).toBeInTheDocument()
  })

  it('renders children', () => {
    renderWithRouter(
      <FormField label="Event Name">
        <Input placeholder="Enter name" />
      </FormField>
    )
    expect(screen.getByPlaceholderText('Enter name')).toBeInTheDocument()
  })

  it('renders error message when provided', () => {
    renderWithRouter(
      <FormField label="Event Name" error="Event name is required">
        <Input placeholder="Enter name" />
      </FormField>
    )
    expect(screen.getByText('Event name is required')).toBeInTheDocument()
  })

  it('does not render error when not provided', () => {
    renderWithRouter(
      <FormField label="Event Name">
        <Input placeholder="Enter name" />
      </FormField>
    )
    expect(screen.queryByRole('paragraph')).not.toBeInTheDocument()
  })
})
