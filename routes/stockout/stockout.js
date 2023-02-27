const { Router } = require('express');
const { check } = require('express-validator');
const { listarStockOut } = require('../../controllers/stockout/stockoutController.js');
const { validarCampos, validarJWT } = require('../../middlewares/index.js');

const routerstockout = Router();

routerstockout.post('/listarStockOut',
    [
        validarJWT,
        check('fecha_inicial', 'La validacion fecha_inicial es obligatoria').not().isEmpty(),
        check('fecha_final', 'La validacion fecha_final es obligatoria').not().isEmpty(),
        validarCampos
    ],
    listarStockOut
);

module.exports = { routerstockout };