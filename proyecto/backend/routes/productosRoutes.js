const express = require('express');
const router = express.Router();
const Producto = require('../models/producto');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/productos', (req, res) => {
        Producto.find()
        .then(productos => {
            res.json(productos);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});
//Middleware
router.get('/productos/:id',(req, res) => {
    Producto.findById(req.params.id)
    .then( resultado => {
        res.json(resultado);
    })
    .catch( err => {
        res.send(err);
    })
});

router.delete('/productos/:id',(req, res) => {
    Producto.deleteOne({ _id: req.params.id })
    .then( resultado => {
        res.json(resultado);
    })
    .catch( err => {
        res.send(err);
    })
});

//actualizar
router.put('/productos/:id',(req, res) => {
    Producto.updateOne({ _id: req.params.id }, req.body )
    .then( producto => {
        res.json(producto);
    })
    .catch( err => {
        res.send(err);
    })
});

module.exports = router;