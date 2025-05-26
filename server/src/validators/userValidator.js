const { check } = require('express-validator');
const { User } = require('../models/user');

const registerValidation = [
  check('username')
    .isLength({ min: 3, max: 20 })
    .withMessage('Username deve ter entre 3 e 20 caracteres')
    .custom(async (value) => {
      const existingUser = await User.findOne({ username: value });
      if (existingUser) {
        throw new Error('Username já cadastrado');
      }
      return true;
    }),
  check('email')
    .isEmail()
    .withMessage('Email deve ser válido')
    .normalizeEmail()
    .custom(async (value) => {
      const existingUser = await User.findOne({ email: value });
      if (existingUser) {
        throw new Error('Email já cadastrado');
      }
      return true;
    }),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Senha deve ter pelo menos 6 caracteres')
    .matches(/\d/)
    .withMessage('Senha deve conter pelo menos um número')
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage('Senha deve conter pelo menos um caractere especial')
    .matches(/[A-Z]/)
    .withMessage('Senha deve conter pelo menos uma letra maiúscula')
    .matches(/[a-z]/)
    .withMessage('Senha deve conter pelo menos uma letra minúscula'),
];

const loginValidation = [
  check('email')
    .isEmail()
    .withMessage('Email deve ser válido')
    .normalizeEmail(),
  check('password')
    .notEmpty()
    .withMessage('Senha é obrigatória'),
];

module.exports = {
  registerValidation,
  loginValidation,
};

