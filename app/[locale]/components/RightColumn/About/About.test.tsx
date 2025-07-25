import { render, screen } from '@testing-library/react'
import { About } from './About'

jest.mock('../../../utils/calculateExperience', () => ({
  calculateYearsOfExperience: jest.fn(() => 5),
}))

const mockTranslations = {
  'aboutTitle': 'About Me',
  'aboutDescription': 'I am a passionate Frontend Developer with {years} years of experience...',
}

jest.mock('next-intl', () => ({
  useTranslations: () => (key: string, values?: any) => {
    const template = mockTranslations[key as keyof typeof mockTranslations] || key
    if (values && template.includes('{years}')) {
      return template.replace('{years}', values.years.toString())
    }
    return template
  },
}))

describe('About Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<About />)
    expect(container.firstChild).toBeInTheDocument()
  });
})
