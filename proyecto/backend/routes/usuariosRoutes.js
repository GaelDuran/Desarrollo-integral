const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');


router.get('/usuario', (req, res) => {

        Producto.find()
        .then((usuario) => {
            res.json(usuario);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

module.exports = router;