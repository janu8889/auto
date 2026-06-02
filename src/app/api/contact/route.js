// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const { fullName, email, phone, subject, message } = await req.json();

//     // basic validation
//     if (!fullName || !email || !phone) {
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     const token = '7594221274:AAHhvlVReiGLUAbAhePSW6cq0CEW6_5i80s';
//     const chatId = '-5263521263';

//     if (!token || !chatId) {
//       return NextResponse.json(
//         { error: "Server misconfigured" },
//         { status: 500 }
//       );
//     }

//     // format mesaj frumos pentru Telegram
//     const text = [
//       "📩 Kash Automotive Group LLC CONTACT FORM",
//       "----------------------",
//       `👤 Name: ${fullName}`,
//       `📧 Email: ${email}`,
//       `📞 Phone: ${phone}`,
//       `📌 Subject: ${subject || "General Inquiry"}`,
//       `💬 Message: ${message || "-"}`,
//       "----------------------",
//       `🕒 Time: ${new Date().toLocaleString("ro-RO")}`,
//     ].join("\n");

//     const tgRes = await fetch(
//       `https://api.telegram.org/bot${token}/sendMessage`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           chat_id: chatId,
//           text,
//         }),
//       }
//     );

//     const data = await tgRes.json();

//     if (!tgRes.ok) {
//       return NextResponse.json(
//         { error: "Telegram failed", details: data },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({
//       ok: true,
//       message: "Sent successfully",
//     });
//   } catch (err) {
//     return NextResponse.json(
//       { error: "Server error", details: err.message },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { fullName, email, phone, subject, message } = await req.json();

    // basic validation
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const text = [
      "📩 KASH AUTOMOTIVE GROUP LLC - CONTACT FORM",
      "----------------------",
      `👤 Name: ${fullName}`,
      `📧 Email: ${email}`,
      `📞 Phone: ${phone}`,
      `📌 Subject: ${subject || "General Inquiry"}`,
      `💬 Message: ${message || "-"}`,
      "----------------------",
      `🕒 Time: ${new Date().toLocaleString("ro-RO")}`,
    ].join("\n");

    // =========================
    // EMAIL TRANSPORT (GMAIL)
    // =========================
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "messaging.4006218@gmail.com",
        pass: "zxkm fosn zsts hbji",
      },
    });

    await transporter.sendMail({
      from: "messaging.4006218@gmail.com",
      to: "sales@kashautomotive.com",
      subject: "📩 New Contact Form Submission",
      text,
    });

    return NextResponse.json({
      ok: true,
      message: "Email sent successfully",
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Server error", details: err.message },
      { status: 500 }
    );
  }
}