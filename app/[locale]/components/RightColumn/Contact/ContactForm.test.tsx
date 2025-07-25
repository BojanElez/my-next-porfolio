import { render, screen } from '@testing-library/react'
import { ContactForm } from './ContactForm'

jest.mock('../../common/Form/Form', () => ({
  Form: (props: any) => (
    <div data-testid="form">
      <div data-testid="form-props">{JSON.stringify(props)}</div>
    </div>
  )
}))

const mockTranslations: Record<string, string> = {
  'firstName': 'First Name',
  'firstNameRequired': 'First name is required',
  'lastName': 'Last Name',
  'lastNameRequired': 'Last name is required',
  'message': 'Message',
  'messageRequired': 'Message is required',
  'send': 'Send',
  'subject': 'Subject',
  'subjectRequired': 'Subject is required',
  'emailRequired': 'Email is required'
}

jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => mockTranslations[key] || key,
}))

describe('ContactForm Component', () => {
  it('renders contact form wrapper with correct styling', () => {
    render(<ContactForm />)
    
    const wrapper = screen.getByTestId('form').parentElement
    expect(wrapper).toHaveClass('w-full', 'pt-10')
  })

  it('renders Form component', () => {
    render(<ContactForm />)
    
    expect(screen.getByTestId('form')).toBeInTheDocument()
  })

  it('passes correct props to Form component', () => {
    render(<ContactForm />)
    
    const formPropsElement = screen.getByTestId('form-props')
    const formProps = JSON.parse(formPropsElement.textContent || '{}')

    expect(formProps).toEqual({
      firstName: 'First Name',
      firstNameError: 'First name is required',
      lastName: 'Last Name',
      lastNameError: 'Last name is required',
      message: 'Message',
      messageError: 'Message is required',
      send: 'Send',
      subject: 'Subject',
      subjectError: 'Subject is required',
      emailError: 'Email is required'
    })
  })

  it('uses translations for all form labels', () => {
    render(<ContactForm />)
    
    const formPropsElement = screen.getByTestId('form-props')
    const formProps = JSON.parse(formPropsElement.textContent || '{}')
    
    expect(formProps.firstName).toBe('First Name')
    expect(formProps.lastName).toBe('Last Name')
    expect(formProps.subject).toBe('Subject')
    expect(formProps.message).toBe('Message')
    expect(formProps.send).toBe('Send')
  })

  it('uses translations for all error messages', () => {
    render(<ContactForm />)
    
    const formPropsElement = screen.getByTestId('form-props')
    const formProps = JSON.parse(formPropsElement.textContent || '{}')
    
    expect(formProps.firstNameError).toBe('First name is required')
    expect(formProps.lastNameError).toBe('Last name is required')
    expect(formProps.messageError).toBe('Message is required')
    expect(formProps.subjectError).toBe('Subject is required')
    expect(formProps.emailError).toBe('Email is required')
  })

  it('applies correct wrapper styling', () => {
    const { container } = render(<ContactForm />)
    
    const wrapper = container.firstElementChild
    expect(wrapper).toHaveClass('w-full')
    expect(wrapper).toHaveClass('pt-10')
  })

  it('renders without crashing', () => {
    const { container } = render(<ContactForm />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('passes all required form configuration', () => {
    render(<ContactForm />)
    
    const formPropsElement = screen.getByTestId('form-props')
    const formProps = JSON.parse(formPropsElement.textContent || '{}')
    
    const expectedProps = [
      'firstName', 'firstNameError',
      'lastName', 'lastNameError', 
      'message', 'messageError',
      'send', 'subject', 'subjectError',
      'emailError'
    ]
    
    expectedProps.forEach(prop => {
      expect(formProps).toHaveProperty(prop)
      expect(formProps[prop]).toBeTruthy()
    })
  })

  it('integrates properly with translation system', () => {
    render(<ContactForm />)
    
    expect(screen.getByTestId('form')).toBeInTheDocument()
    
    const formPropsElement = screen.getByTestId('form-props')
    const formProps = JSON.parse(formPropsElement.textContent || '{}')
    
    Object.values(formProps).forEach(value => {
      expect(typeof value).toBe('string')
      expect((value as string).length).toBeGreaterThan(0)
    })
  })

  it('has proper component structure', () => {
    const { container } = render(<ContactForm />)
    
    expect(container.children).toHaveLength(1)
    
    const wrapper = container.firstElementChild
    expect(wrapper?.tagName).toBe('DIV')
    expect(wrapper?.children).toHaveLength(1)
  })
})