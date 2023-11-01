import { EmailTemplate } from '@/app/ui/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const { RESEND_API_KEY, EMAIL } = process.env;
const resend = new Resend(new String(RESEND_API_KEY).toString() || '');
const sender = new String(new String(EMAIL).toString() || '');

export async function POST(props: any) {
  const { name = '', email = '', subject = '', message = '' } = props;
  const from: string = `${name} ${email}`;
  const to: string[] = [sender.toString()];

  try {
    const data = await resend.emails.send({
      from,
      to,
      subject,
      text: message,
      react: EmailTemplate({ name, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
