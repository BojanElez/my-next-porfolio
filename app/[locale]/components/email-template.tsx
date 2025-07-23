import * as React from 'react';
import { EmailTemplateProps } from '@/app/types';

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({description}: EmailTemplateProps) => {
  const containerStyle = {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    lineHeight: '1.6',
    color: '#111827',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '24px',
    backgroundColor: '#ffffff',
  };

  const headerStyle = {
    color: '#1e40af',
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '16px',
    paddingBottom: '12px',
    borderBottom: '2px solid #e5e7eb',
  };

  const contentBoxStyle = {
    backgroundColor: '#f9fafb',
    padding: '20px',
    borderRadius: '8px',
    margin: '20px 0',
    border: '1px solid #e5e7eb',
  };

  const textStyle = {
    whiteSpace: 'pre-wrap' as const,
    fontFamily: 'inherit',
    margin: '0',
    fontSize: '16px',
    color: '#374151',
  };

  const dividerStyle = {
    margin: '24px 0',
    border: 'none',
    borderTop: '1px solid #d1d5db',
  };

  const footerStyle = {
    fontSize: '14px',
    color: '#6b7280',
    textAlign: 'center' as const,
    fontStyle: 'italic',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>
        📧 New Contact Form Submission
      </h2>
      <div style={contentBoxStyle}>
        <pre style={textStyle}>
          {description}
        </pre>
      </div>
      <hr style={dividerStyle} />
      <p style={footerStyle}>
        This email was sent from your portfolio contact form.
      </p>
    </div>
  );
};