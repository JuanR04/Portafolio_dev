const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config(); 

const app = express();

// Configuración de CORS para aceptar solicitudes solo desde el front especificado
const corsOptions = {
  origin: "https://portafolio-dev-kappa.vercel.app",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());

// Define port for local development, Vercel will handle deployment port automatically
const PORT = process.env.PORT || 3001;

app.post("/api/send", async (req, res) => {
  const { name, email, message } = req.body;
  
  // Get email credentials from environment variables
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  
  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // Uses the same email from env variables
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <h3>Mensaje desde tu portafolio</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    });
    
    res.status(200).json({ success: true, message: "Mensaje enviado!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error al enviar." });
  }
});

// For Vercel deployment, we need a root route
app.get("/", (req, res) => {
  res.send("API de envío de correos funcionando!");
});

// Only start the server if running directly (not when imported as module)
if (require.main === module) {
  app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
}

// Export for Vercel serverless functions
module.exports = app;