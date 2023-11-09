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
  <section className="max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">
    <main className="mt-8">
      <h2 className="text-gray-700 dark:text-gray-200">Hi Jairo,</h2>

      <p className="mt-2 text-gray-600 dark:text-gray-300 text-md">{subject}</p>

      <p className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
        {message}
      </p>

      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Thanks, <br />
      </p>
    </main>

    <footer className="mt-8">
      <p className="text-gray-500 dark:text-gray-400">
        This email was sended by{' '}
        <a
          href={`mailTo:${email}`}
          className="text-blue-600 hover:underline dark:text-blue-400"
          target="_blank"
        >
          {email}
        </a>
      </p>

      <p className="mt-3 text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} ocrensys developer. All Rights Reserved.
      </p>
    </footer>
  </section>
);
