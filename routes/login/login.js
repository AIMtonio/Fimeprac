const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../../controllers/login/login');
const { validarCampos, validarJWT } = require('../../middlewares/index.js');

const routerLogin = Router();

routerLogin.post('/login',
    [
        //validarJWT,
        check('email', 'La validacion fecha_inicial es obligatoria').not().isEmpty(),
        check('password', 'La validacion fecha_final es obligatoria').not().isEmpty(),
        validarCampos
    ],
    login
);

module.exports = { routerLogin };