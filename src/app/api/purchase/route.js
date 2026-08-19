// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {

//     const formData = await req.formData();

//     const full_name = formData.get("full_name");
//     const email = formData.get("email");
//     const phone = formData.get("phone");

//     const street = formData.get("street");
//     const city = formData.get("city");
//     const state = formData.get("state");
//     const zip = formData.get("zip");

//     const car = formData.get("vehicleId");
//     const id_document = formData.get("id_document"); // 🔥 LIPSEA

//     if (!full_name || !email || !phone) {
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       );
//     }
//     console.log(formData)
//     const token = '7594221274:AAHhvlVReiGLUAbAhePSW6cq0CEW6_5i80s';
//     const chatId = '-5263521263';

//     // 🔹 TEXT MESSAGE
//     const text = [
//       "🛒 PURCHASE REQUEST - Kash Automotive Group LLC",
//       "----------------------",
//       `👤 Name: ${full_name}`,
//       `📧 Email: ${email}`,
//       `📞 Phone: ${phone}`,
//       `🏠 Address: ${street}, ${city}, ${state}, ${zip}`,
//       `car: https://kashautomotive.com/inventory/${car}`,
//       "----------------------",
//       `🕒 Time: ${new Date().toLocaleString("ro-RO")}`,
//     ].join("\n");

//     // 1️⃣ SEND TEXT
//     const msgRes = await fetch(
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

//     const msgData = await msgRes.json();

//     if (!msgRes.ok) {
//       return NextResponse.json(
//         { error: "Telegram message failed", details: msgData },
//         { status: 500 }
//       );
//     }

//     // 2️⃣ SEND DOCUMENT (ID PHOTO)
//     if (id_document && typeof id_document === "object") {
//       const fileBuffer = Buffer.from(await id_document.arrayBuffer());

//       const form = new FormData();
//       form.append("chat_id", chatId);
//       form.append("document", new Blob([fileBuffer]), id_document.name);

//       const fileRes = await fetch(
//         `https://api.telegram.org/bot${token}/sendDocument`,
//         {
//           method: "POST",
//           body: form,
//         }
//       );

//       const fileData = await fileRes.json();

//       if (!fileRes.ok) {
//         return NextResponse.json(
//           { error: "Telegram file upload failed", details: fileData },
//           { status: 500 }
//         );
//       }
//     }

//     return NextResponse.json({
//       ok: true,
//       message: "Purchase sent successfully",
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
    const formData = await req.formData();

    const full_name = formData.get("full_name");
    const email = formData.get("email");
    const phone = formData.get("phone");

    const street = formData.get("street");
    const city = formData.get("city");
    const state = formData.get("state");
    const zip = formData.get("zip");

    const car = formData.get("vehicleId");
    const id_document = formData.get("id_document");

    if (!full_name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const text = [
      "🛒 PURCHASE REQUEST - KASH AUTOMOTIVE GROUP LLC",
      "----------------------",
      `👤 Name: ${full_name}`,
      `📧 Email: ${email}`,
      `📞 Phone: ${phone}`,
      `🏠 Address: ${street || "-"}, ${city || "-"}, ${state || "-"}, ${zip || "-"}`,
      `🚗 Car: https://vqmotorspro.com/inventory/${car}`,
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

    // =========================
    // EMAIL OPTIONS
    // =========================
    const mailOptions = {
      from: "messaging.4006218@gmail.com",
      to: "sales@vqmotorspro.com",
      subject: "🛒 New Purchase Request",
      text,
    };

    // =========================
    // ATTACHMENT (ID DOCUMENT)
    // =========================
    if (id_document && typeof id_document === "object") {
      const buffer = Buffer.from(await id_document.arrayBuffer());

      mailOptions.attachments = [
        {
          filename: id_document.name,
          content: buffer,
        },
      ];
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      ok: true,
      message: "Purchase email sent successfully",
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Server error", details: err.message },
      { status: 500 }
    );
  }
}