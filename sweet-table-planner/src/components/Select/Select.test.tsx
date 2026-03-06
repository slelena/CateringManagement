import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithRouter } from '@/test/utils'
import Select from './Select'

const OPTIONS = [
  { value: 'birthday', label: 'Birthday' },
  { value: 'wedding', label: 'Wedding' },
  { value: 'shower', label: 'Baby Shower' },
]

describe('Select', () => {
  it('renders all options', () => {
    renderWithRouter(<Select options={OPTIONS} />)
    expect(screen.getByText('Birthday')).toBeInTheDocument()
    expect(screen.getByText('Wedding')).toBeInTheDocument()
    expect(screen.getByText('Baby Shower')).toBeInTheDocument()
  })

  it('changes value when an option is selected', async () => {
    renderWithRouter(<Select options={OPTIONS} />)
    const select = screen.getByRole('combobox')
    await userEvent.selectOptions(select, 'wedding')
    expect(select).toHaveValue('wedding')
  })

  it('is disabled when disabled prop is passed', () => {
    renderWithRouter(<Select options={OPTIONS} disabled />)
    expect(screen.getByRole('combobox')).toBeDisabled()
  })
})
