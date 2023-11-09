import { EmailTemplate } from '@/app/ui/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(`${process.env.NEXT_PUBLIC_RESEND_API_KEY}`);
const senders: string[] = [`${process.env.NEXT_PUBLIC_EMAIL}`];

export async function POST(req: Request) {
  const { subject = '', email = '', message = '' }: any = await req.json();

  const from: string = `${subject} <${'resend@resend.dev'}>`;
  const to: string[] = [...senders];

  const config = {
    from,
    to,
    subject,
    text: message,
    react: EmailTemplate({ subject, message, email }),
  };


  try {
    const data = await resend.emails.send(config);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
