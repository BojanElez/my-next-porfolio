// =============================================================================
// COMPONENT PROPS TYPES
// =============================================================================

export type ButtonProps = {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  buttonEvent?: () => void;
  variant?: string;
  className?: string;
};

export type SubtitleProps = {
  children: React.ReactNode;
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
};

export type NavigationProps = {
  navListTranslation: string[];
  navList: string[];
};

export type ProviderChildren = {
  children: React.ReactNode;
};

// =============================================================================
// BUSINESS DOMAIN TYPES
// =============================================================================

export type IProject = {
  id: number;
  techStack: string;
  domainName: string;
  projectDescription: string;
};

export type ProjectDetailProps = {
  index: number;
  projectName: string;
  techStack: string;
  technologies: string;
};

// =============================================================================
// FORM TYPES
// =============================================================================

export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  subject: string;
};

export type ContactFormProps = {
  firstName: string;
  firstNameError: string;
  lastName: string;
  lastNameError: string;
  message: string;
  messageError: string;
  subject: string;
  subjectError: string;
  emailError: string;
  send: string;
};

// =============================================================================
// EMAIL TYPES
// =============================================================================

export type EmailTemplateProps = {
  description: string;
};
