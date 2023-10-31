import * as React from 'react';

interface EmailTemplateProps {
  description: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({description}:EmailTemplateProps) => (
  <div>
    {description}
  </div>
);