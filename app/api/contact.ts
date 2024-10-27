import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  console.log('Contact API hit');
  const { name, email, phone, message } = await req.json();

  // Set up Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Use environment variable here
    subject: `Contact Form Submission from ${name}`,
    text: `You have a new message from ${name} (${phone}):\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error sending message' }), { status: 500 });
  }
}
