import { render, screen } from '@testing-library/react'
import { Contact } from './Contact'

jest.mock('./ContactForm', () => ({
  ContactForm: () => <div data-testid="contact-form">Contact Form</div>
}))

const mockTranslations: Record<string, string> = {
  'contact': 'Contact'
}

jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => mockTranslations[key] || key,
}))

describe('Contact Component', () => {
  it('renders contact title', () => {
    render(<Contact />)
    
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('displays phone number with icon', () => {
    render(<Contact />)
    
    expect(screen.getByText('+381 60 67 98 204')).toBeInTheDocument()
    
    const phoneIcon = screen.getByText('+381 60 67 98 204').previousElementSibling
    expect(phoneIcon).toBeInTheDocument()
    expect(phoneIcon?.tagName).toBe('svg')
  })

  it('displays email address with icon', () => {
    render(<Contact />)
    
    expect(screen.getByText('belez911@gmail.com')).toBeInTheDocument()
    
    const emailIcon = screen.getByText('belez911@gmail.com').previousElementSibling
    expect(emailIcon).toBeInTheDocument()
    expect(emailIcon?.tagName).toBe('svg')
  })

  it('renders contact information in a list', () => {
    render(<Contact />)
    
    const contactList = screen.getByRole('list')
    expect(contactList).toBeInTheDocument()
    
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(2)
  })

  it('applies correct styling to contact items', () => {
    render(<Contact />)
    
    const listItems = screen.getAllByRole('listitem')
    
    listItems.forEach(item => {
      expect(item).toHaveClass('flex', 'items-center', 'pr-2', 'pb-2')
    })
  })

  it('renders ContactForm component', () => {
    render(<Contact />)
    
    expect(screen.getByTestId('contact-form')).toBeInTheDocument()
  })

  it('has proper contact information structure', () => {
    render(<Contact />)
    
    const phoneText = screen.getByText('+381 60 67 98 204')
    const emailText = screen.getByText('belez911@gmail.com')
    
    expect(phoneText.previousElementSibling).toBeTruthy()
    expect(emailText.previousElementSibling).toBeTruthy()
    
    expect(phoneText).toHaveClass('ml-2')
    expect(emailText).toHaveClass('ml-2')
  })

  it('renders without crashing', () => {
    const { container } = render(<Contact />)
    expect(container.firstChild).toBeInTheDocument()
  })
})