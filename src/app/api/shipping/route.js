// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const {
//       fullName,
//       email,
//       phone,
//       pickupZip,
//       deliveryZip,
//       vehicleInfo,
//       transportType,
//       message,
//     } = await req.json();

//     // validation minimă
//     if (!fullName || !email || !phone || !pickupZip || !deliveryZip) {
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     // 🔐 Telegram bot (pune-le în .env mai târziu)
//     const token = '7594221274:AAHhvlVReiGLUAbAhePSW6cq0CEW6_5i80s';
//     const chatId = '-5263521263';

//     const text = `
// 🚛 SHIPPING QUOTE REQUEST

// 👤 Name: ${fullName}
// 📧 Email: ${email}
// 📞 Phone: ${phone}

// 📍 Pickup ZIP: ${pickupZip}
// 📍 Delivery ZIP: ${deliveryZip}

// 🚗 Vehicle: ${vehicleInfo || "N/A"}
// 🚚 Transport Type: ${transportType || "N/A"}

// 📝 Message:
// ${message || "N/A"}
// `;

//     const tgRes = await fetch(
//       `https://api.telegram.org/bot${token}/sendMessage`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           chat_id: chatId,
//           text,
//         }),
//       }
//     );

//     const data = await tgRes.json();

//     if (!tgRes.ok) {
//       return NextResponse.json(
//         { error: "Telegram error", details: data },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({
//       ok: true,
//       message: "Shipping quote sent successfully",
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
    const {
      fullName,
      email,
      phone,
      pickupZip,
      deliveryZip,
      vehicleInfo,
      transportType,
      message,
    } = await req.json();

    // validation minimă
    if (!fullName || !email || !phone || !pickupZip || !deliveryZip) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const text = [
      "🚛 SHIPPING QUOTE REQUEST",
      "----------------------",
      `👤 Name: ${fullName}`,
      `📧 Email: ${email}`,
      `📞 Phone: ${phone}`,
      "",
      `📍 Pickup ZIP: ${pickupZip}`,
      `📍 Delivery ZIP: ${deliveryZip}`,
      "",
      `🚗 Vehicle: ${vehicleInfo || "N/A"}`,
      `🚚 Transport Type: ${transportType || "N/A"}`,
      "",
      "📝 Message:",
      `${message || "N/A"}`,
      "----------------------",
      `🕒 Time: ${new Date().toLocaleString("ro-RO")}`,
    ].join("\n");

    // =========================
    // EMAIL (GMAIL + NODEMAILER)
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
      to: "sales@vqmotorspro.com",
      subject: "🚛 New Shipping Quote Request",
      text,
    });

    return NextResponse.json({
      ok: true,
      message: "Shipping quote email sent successfully",
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Server error", details: err.message },
      { status: 500 }
    );
  }
}