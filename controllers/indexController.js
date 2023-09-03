const path = require('path');
const fs = require('fs'); 
const productsFilePath = path.join(__dirname, '../data/ProductosDataBaseJ.json');
const productsDescuenoFilePath = path.join(__dirname, '../data/ProductosDescuento.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const productsDescuento = JSON.parse(fs.readFileSync(productsDescuenoFilePath, 'utf-8'));
const controlador = {
    inicio: (req, res) => {
        res.render('home', { products: products },{productsDescuento:productsDescuento});
    },
    formularioA: (req, res) => {
        res.render('a');
    },
    formularioB: (req, res) => {
        res.render('formulario');
    },
    menu: (req, res) => {
        res.render('hamburguesa');
    },
    carrito: (req, res) => {
        res.render('carrito');
    },
    usuario: (req, res) => {
        res.render('usuario');
    },
    vender: (req, res) => {
        res.render('vender');
    }
};

module.exports = controlador;
