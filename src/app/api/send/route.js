import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Konfigurasi transport email
    const transporter = nodemailer.createTransport({
      service: "gmail", // bisa juga pakai SMTP lain
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Buat konten email
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // dikirim ke email kamu
      subject: `Pesan Baru dari ${name}`,
      text: `
        Nama: ${name}
        Email: ${email}
        Pesan: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Succsess!!!" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 }
    );
  }
}
