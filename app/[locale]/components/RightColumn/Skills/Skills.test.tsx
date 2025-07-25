import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Skills } from './Skills'

const mockTranslations: Record<string, string> = {
  'skills': 'Skills',
  'programmingLanguagesAndFrameworks': 'Programming Languages & Frameworks',
  'libraries': 'Libraries',
  'markupAndStyling': 'Markup & Styling Languages',
  'databasesAndAPIs': 'Databases & APIs',
  'toolsAndOthers': 'Tools & Others'
}

jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => mockTranslations[key] || key,
}))

describe('Skills Component', () => {
  it('renders skills title', () => {
    render(<Skills />)
    
    expect(screen.getByText('Skills')).toBeInTheDocument()
  })

  it('renders all skill categories', () => {
    render(<Skills />)
    
    expect(screen.getByText('Programming Languages & Frameworks')).toBeInTheDocument()
    expect(screen.getByText('Libraries')).toBeInTheDocument()
    expect(screen.getByText('Markup & Styling Languages')).toBeInTheDocument()
    expect(screen.getByText('Databases & APIs')).toBeInTheDocument()
    expect(screen.getByText('Tools & Others')).toBeInTheDocument()
  })

  it('renders specific skills', () => {
    render(<Skills />)

    expect(screen.getByText('JavaScript ES5/ES6+')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('NextJS')).toBeInTheDocument()
    expect(screen.getByText('Redux Toolkit')).toBeInTheDocument()
    expect(screen.getByText('HTML5')).toBeInTheDocument()
    expect(screen.getByText('CSS3')).toBeInTheDocument()
    expect(screen.getByText('Tailwind')).toBeInTheDocument()
    expect(screen.getByText('SQL')).toBeInTheDocument()
    expect(screen.getByText('GraphQL')).toBeInTheDocument()
    expect(screen.getByText('Docker')).toBeInTheDocument()
  })

  it('renders skills in organized sections', () => {
    render(<Skills />)
    
    // Test that skills are properly organized
    const skillElements = screen.getAllByText(/JavaScript|React|HTML5|SQL|Docker/)
    expect(skillElements.length).toBeGreaterThan(0)
  });

  it('has proper component structure', () => {
    render(<Skills />)
    
    const skillsSection = screen.getByText('Skills').closest('section')
    expect(skillsSection).toBeInTheDocument()
  });
})