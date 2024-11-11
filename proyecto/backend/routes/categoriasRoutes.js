const express = require('express');
const router = express.Router();
const Usuario = require('../models/categoria');


router.get('/categoria', (req, res) => {

        Producto.find()
        .then((categoria) => {
            res.json(categoria);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

module.exports = router;