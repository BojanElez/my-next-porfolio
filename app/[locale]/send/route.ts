import { NextResponse } from 'next/server';

export async function POST(request: any) {
  try {
    const body = await request.json();
    const EmailTemplate = (await (import('@/app/[locale]/components/email-template') as any)).default
    const Resend = (await (import('resend') as any)).default
    const resend = new Resend('re_HF3DDFs6_PEBoAbCuquy3iH7Es26pVbWh');
    const data = await resend.emails.send({
      from: 'Mail from site <onboarding@resend1.dev>',
      to: ['bojan.elez@vegait.rs'],
      subject: `${body.email}`,
      react: EmailTemplate({ description: body.message }),
    } as any);

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}