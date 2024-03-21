import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request: any) {
    try {
        const { subject, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'zoho',
            host: 'smtp.zoho.com',
            port: 465,
            secure: true,
            auth: {
                user: 'mohsinrazkhan@zohomail.com',
                pass: process.env.NEXT_PUBLIC_PASSWORD
            }
        })

        const mailOption = {
            from: 'rocksafridi47@gmail.com',
            to: 'mohsinraz3@gmail.com',
            subject: "Send Email Tutorial",
            html: `
        <h3>Hello Mohsin</h3>
        <li> title: ${subject}</li>
        <li> message: ${message}</li> 
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}