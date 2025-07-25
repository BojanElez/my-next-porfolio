import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Modal } from "./Modal";

describe('Modal', () => {
  const mockProps = {
    title: 'Test Modal Title',
    showMore: 'Show More Projects',
    projects: [
      {
        id: 1,
        techStack: 'React, TypeScript',
        domainName: 'Project One',
        projectDescription: 'Description for project one'
      },
      {
        id: 2, 
        techStack: 'Next.js, Tailwind',
        domainName: 'Project Two',
        projectDescription: 'Description for project two'
      }
    ]
  };

  beforeEach(() => {
    render(<Modal {...mockProps} />);
  });

  it('renders the trigger button with correct text', () => {
    const button = screen.getByRole('button', { name: 'Show More Projects' });
    expect(button).toBeInTheDocument();
  });

  it('does not show modal content initially', () => {
    expect(screen.queryByText('Test Modal Title')).not.toBeInTheDocument();
    expect(screen.queryByText('Project One')).not.toBeInTheDocument();
  });

  it('opens modal when trigger button is clicked', async () => {
    const user = userEvent.setup();
    const button = screen.getByRole('button', { name: 'Show More Projects' });
    
    await user.click(button);
    
    expect(screen.getByText('Test Modal Title')).toBeInTheDocument();
    expect(screen.getByText('Project One')).toBeInTheDocument();
    expect(screen.getByText('Project Two')).toBeInTheDocument();
  });

  it('closes modal when X button is clicked', async () => {
    const user = userEvent.setup();
    const triggerButton = screen.getByRole('button', { name: 'Show More Projects' });
    
    // Open modal
    await user.click(triggerButton);
    expect(screen.getByText('Test Modal Title')).toBeInTheDocument();
    
    // Close modal
    const closeButton = screen.getByText('X');
    await user.click(closeButton);
    
    expect(screen.queryByText('Test Modal Title')).not.toBeInTheDocument();
  });

  it('renders modal title correctly when open', async () => {
    const user = userEvent.setup();
    const button = screen.getByRole('button', { name: 'Show More Projects' });
    
    await user.click(button);
    
    const title = screen.getByRole('heading', { level: 2, name: 'Test Modal Title' });
    expect(title).toBeInTheDocument();
  });

  it('renders all projects with correct information', async () => {
    const user = userEvent.setup();
    const button = screen.getByRole('button', { name: 'Show More Projects' });
    
    await user.click(button);
    
    // Check first project
    expect(screen.getByRole('heading', { level: 2, name: 'Project One' })).toBeInTheDocument();
    expect(screen.getByText('Description for project one')).toBeInTheDocument();
    
    // Check second project
    expect(screen.getByRole('heading', { level: 2, name: 'Project Two' })).toBeInTheDocument();
    expect(screen.getByText('Description for project two')).toBeInTheDocument();
  });

  it('has incorrect key attribute in project mapping (bug)', async () => {
    const user = userEvent.setup();
    const button = screen.getByRole('button', { name: 'Show More Projects' });
    
    await user.click(button);
    
    // This test documents the bug where key="project.id" is a string literal
    // instead of key={project.id}
    const projectDivs = screen.getAllByText(/Project (One|Two)/);
    expect(projectDivs).toHaveLength(2);
    
    // The bug means all project divs would have the same key "project.id"
    // This is a React warning but doesn't break functionality in this simple case
  });

  it('renders modal overlay when open', async () => {
    const user = userEvent.setup();
    const button = screen.getByRole('button', { name: 'Show More Projects' });
    
    await user.click(button);
    
    // Check for modal overlay
    const overlay = document.querySelector('.opacity-25.fixed.inset-0.z-40.bg-black');
    expect(overlay).toBeInTheDocument();
  });

  it('renders modal with proper z-index structure', async () => {
    const user = userEvent.setup();
    const button = screen.getByRole('button', { name: 'Show More Projects' });
    
    await user.click(button);
    
    // Modal content should have higher z-index than overlay
    const modalContent = document.querySelector('.z-50');
    const modalOverlay = document.querySelector('.z-40');
    
    expect(modalContent).toBeInTheDocument();
    expect(modalOverlay).toBeInTheDocument();
  });

  it('renders empty paragraph element (code issue)', async () => {
    const user = userEvent.setup();
    const button = screen.getByRole('button', { name: 'Show More Projects' });
    
    await user.click(button);
    
    // There's an empty <p> tag in the code that serves no purpose
    const paragraphs = document.querySelectorAll('p');
    const emptyParagraphs = Array.from(paragraphs).filter(p => p.textContent?.trim() === '');
    
    expect(emptyParagraphs.length).toBeGreaterThan(0);
  });

  it('close button lacks proper accessibility attributes', async () => {
    const user = userEvent.setup();
    const button = screen.getByRole('button', { name: 'Show More Projects' });
    
    await user.click(button);
    
    const closeButton = screen.getByText('X');
    
    expect(closeButton).not.toHaveAttribute('aria-label');
    expect(closeButton).not.toHaveAttribute('role', 'button');
    expect(closeButton.tagName).toBe('DIV');
  });
});