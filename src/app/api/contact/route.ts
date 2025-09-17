import { NextResponse } from 'next/server';
import { Resend } from "resend";

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const { data, error } = await resend.emails.send({
            from: "contact@huzaifa-syed.dev",
            to: "huzaifasyed.dev@gmail.com",
            subject: `New contact from ${name ?? 'Unknown'}`,
            html:`
            <p><strong>From:</strong> ${name ?? '—'} &lt;${email}&gt;</p>
            <p><strong>Message:</strong></p>
            <p>${(message as string).replace(/\n/g, '<br/>')}</p>
            `,
        })

        if (error) {
            return NextResponse.json({ message: error }, { status: 400 });
        }
        
       return NextResponse.json({ message: data }, { status: 200 });
        
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 400 });
    }
} 