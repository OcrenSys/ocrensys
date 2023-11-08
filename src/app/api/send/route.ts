import { EmailTemplate } from '@/app/ui/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST({
  subject = '',
  email = '',
  message = '',
  API_KEY = '',
  EMAIL = '',
}: any) {
  const from: string = `${subject} ${'<resend@resend.dev>'}`;
  const to: string[] = [EMAIL];

  try {
    const data = await new Resend(API_KEY).emails.send({
      from,
      to,
      subject,
      text: message,
      react: EmailTemplate({ subject, message, email }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
