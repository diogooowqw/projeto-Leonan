const functions = require("firebase-functions");
const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "diogosouzalmeida2@gmail.com",
    pass: "gdah foqv ldti ewsh", 
  },
});

exports.enviarEmailConfirmacao = functions.https.onRequest(async (req, res) => {
  const { email, servico, barbeiro, dataHora } = req.body;

  if (!email || !servico || !barbeiro || !dataHora) {
    return res.status(400).send("Dados insuficientes");
  }

  const mailOptions = {
    from: "diogosouzalmeida2@gmail.com",
    to: email,
    subject: "Confirmação de Agendamento",
    html: `
         <div style="font-family: Arial, sans-serif; max-width: 480px; margin: auto; background: #1E293B; padding: 20px; border-radius: 12px; border: 1px solid #ddd;;">
    
    <h2 style="text-align: center; color: #ffffff;">Agendamento Confirmado!</h2>

    <div style="background: #ffffff; border-radius: 10px; margin-top: 15px;align-items: center; padding: 15px; text-align: center;">
        <img src="https://firebasestorage.googleapis.com/v0/b/projeto-leonan-beef0.firebasestorage.app/o/Barbearia.png?alt=media&token=27a32b4c-7209-472c-9268-d79a31367c24" alt="Barber Image" style="width: 70%; border-radius: 10px; margin-bottom: 15px;">
        <p style="margin: 6px 0; font-size: 15px;"><strong> Serviço:</strong> ${servico.nome}</p>
        <p style="margin: 6px 0; font-size: 15px;"><strong>Barbeiro:</strong> ${barbeiro.nome}</p>
        <p style="margin: 6px 0; font-size: 15px;"><strong>Data:</strong> ${dataHora.data}</p>
        <p style="margin: 6px 0; font-size: 15px;"><strong>Horário:</strong> ${dataHora.hora}</p>
    </div>
</div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).send("Email enviado com sucesso!");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Erro ao enviar email");
  }
});
