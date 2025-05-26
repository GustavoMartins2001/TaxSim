const jwt = require('jsonwebtoken');
const { User } = require('../models/user');
const nodemailer = require('nodemailer');
const { sendEmail } = require('../utils/emailService');

const refreshToken = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ message: 'Refresh token é obrigatório' });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const newToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token: newToken });
  } catch (error) {
    res.status(403).json({ message: 'Refresh token inválido' });
  }
};

const logoutUser = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ message: 'Refresh token é obrigatório' });
  }
  try {
    res.status(200).json({ message: 'Logout bem-sucedido' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao fazer logout' });
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Usuario nao encontrado' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '15m' });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const resetLink = `http://localhost:3000/reset-password?token=${resetToken}`;
    await sendEmail(
      email,
      'Recuperação de Senha',
      `Você solicitou a recuperação de senha. Use o link abaixo para redefinir sua senha:\n\n${resetLink}\n\nEste link expira em 15 minutos.`
    );

    res.status(200).json({ message: 'Email de redefinição de senha enviado' });
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao enviar email de redefinição de senha' });
  }
}
const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: 'Usuario nao encontrado' });
    }

    user.password = await user.hashPassword(newPassword);
    await user.save();

    res.status(200).json({ message: 'Senha redefinida com sucesso' });
  } catch (error) {
    res.status(403).json({ message: 'Token inválido ou expirado' });
  }
};

module.exports = {
  refreshToken,
  logoutUser,
  forgotPassword,
  resetPassword
};
