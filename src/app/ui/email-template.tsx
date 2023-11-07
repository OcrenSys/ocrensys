import * as React from 'react';

interface EmailTemplateProps {
  subject: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  subject,
  email,
  message,
}) => (
  <div>
    <h1 className="text-primary-500 text-xl">
      {subject}{' '}
      <small className="text-primary-100 text-md">{`<${email}>`}</small>
    </h1>
    <p>{message}</p>
  </div>
);
